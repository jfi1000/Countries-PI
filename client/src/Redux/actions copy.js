export const GET_COUNTRIES = "GET_COUNTRIES"
import axios from 'axios';


export const getCountries = (searchTerm) => {
    try {
        let endpoint = 'http://localhost:3001/api/v1/countries';

        if(searchTerm){
            endpoint += '?name='+searchTerm;
        }
        console.log(endpoint);
        return async (dispatch) => {
            const apiData = await axios.get(endpoint);
            return dispatch({
                type: GET_COUNTRIES,
                payload: apiData.data,
            })

        }
    } catch (error) {
        console.log(error.message);
    }
};
