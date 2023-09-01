import axios from 'axios';

export const GET_COUNTRIES = "GET_COUNTRIES"

export const getUsers = () => {
    try {
        const endpoint = 'http://localhost:3001/api/v1/countries';
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
