import { GET_COUNTRIES, COUNTRY_NOT_FOUND, SAVE_FORM, GET_COUNTRY  } from "./actions";

const initialState = {
    countries: [],
    country: [],
    error: false 
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                error: false

            };
        case COUNTRY_NOT_FOUND:
            return {
                ...state,
                error: true, 
            };
        case SAVE_FORM:
            return {
            ...state
            };
        case GET_COUNTRY:
            return {
                ...state,
                country: action.payload,
        };
            default:
            return {
                ...state,
            };
    }
};

export default reducer;