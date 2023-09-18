import { GET_COUNTRIES, COUNTRY_NOT_FOUND, SAVE_FORM, GET_COUNTRY, GET_ACTIVITIES  } from "./actions";

const initialState = {
    countries: [],
    country: [],
    activities: [],
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
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
        };
        default:
            return {
                ...state,
            };
    }
};

export default reducer;