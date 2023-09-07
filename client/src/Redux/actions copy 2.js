import axios from 'axios';

export const GET_COUNTRIES = "GET_COUNTRIES";
export const COUNTRY_NOT_FOUND = "COUNTRY_NOT_FOUND";

export const getCountries = (searchTerm) => {
  return async (dispatch) => {
    try {
      let endpoint = 'http://localhost:3001/api/v1/countries';

      if (searchTerm) {
        endpoint += `?name=${encodeURIComponent(searchTerm)}`;
      }

      // Utiliza un bloque try...catch para manejar excepciones dentro de la función async
      try {
        const response = await axios.get(endpoint);

        if (response.status === 200) {
          dispatch({
            type: GET_COUNTRIES,
            payload: response.data,
          });
        } else {
          // Cualquier código de estado que no sea 200 se manejará como un error
          dispatch({
            type: COUNTRY_NOT_FOUND,
          });
        }
      } catch (error) {
        console.log(error.message);
        // Maneja el error aquí si es necesario
      }
    } catch (error) {
      console.log(error.message);
      // Maneja el error aquí si es necesario
    }
  };
};