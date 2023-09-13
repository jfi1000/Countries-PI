import axios from 'axios';

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const COUNTRY_NOT_FOUND = "COUNTRY_NOT_FOUND";
export const SAVE_FORM = "SAVE_FORM";

export const getCountries = (searchTerm) => {
  return async (dispatch) => {
    try {
      let endpoint = 'http://localhost:3001/api/v1/countries';

      if (searchTerm) {
        endpoint += '?name=' + searchTerm;
      }

      const apiData = await axios.get(endpoint);
      console.log(apiData.status);

      if (apiData.status === 200) {
        return dispatch({
          type: GET_COUNTRIES,
          payload: apiData.data,
        });
      } 
      // else if (apiData.status === 404) {
      //   console.log("Estado 404 _01 en la respuesta:", apiData.status);
      //   // Manejar el estado 404 explícitamente
      //   return dispatch({
      //     type: COUNTRY_NOT_FOUND,
      //   });
      // } else {
      //   // Aquí puedes lanzar una acción específica o realizar otra lógica de manejo de errores
      //   // Para otros estados de error
      // }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("Estado 404 _02 en la respuesta:", error.response.status);
        // Manejar el estado 404 explícitamente
        return dispatch({
          type: COUNTRY_NOT_FOUND,
        });
      } else {
        // Manejar otros errores de red u otros errores aquí
        console.error("Error en la solicitud:", error.message);
        // Puedes lanzar una acción específica para errores de red si es necesario.
      }
    }
  };
};

export const getCountry = (id) => {
  return async (dispatch) => {
    try {
      let endpoint = 'http://localhost:3001/api/v1/countries/'+id;
console.log(endpoint);
      const apiData = await axios.get(endpoint);

        return dispatch({
          type: GET_COUNTRY,
          payload: apiData.data,
        });
    } catch (error) {
        console.error("Error en la solicitud:", error.message);
      }
    }
};

export const countryNotFound = () => {
  return { type: COUNTRY_NOT_FOUND }
};


export const saveForm = (formData) => {
  console.log("llego");
  return async (dispatch) => {
    try {
      // Realiza la solicitud POST a la API
      const response = await axios.post('http://localhost:3001/api/v1/activities', formData);
      // Si la solicitud es exitosa, despacha una acción de éxito
      dispatch({
        type: SAVE_FORM,
        payload: response.data, // Los datos de la actividad creada
      });
    } catch (error) {
      // Si hay un error, puedes manejarlo dentro del catch
      // Por ejemplo, puedes mostrar un mensaje de error o realizar otra acción necesaria
      console.error('Error al crear la actividad:', error);

      // No despaches una acción de error aquí
    }
  };
};
