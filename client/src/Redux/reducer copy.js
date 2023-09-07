import { GET_COUNTRIES, COUNTRY_NOT_FOUND } from "./actions";

const initialState = {
    countries: [],
    error: false // Estado para manejar errores
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
                error: true, // Establece el estado de error cuando no se encuentra un país
        };

        default:
            return {
                ...state,
            };
    }
};

export default reducer;
