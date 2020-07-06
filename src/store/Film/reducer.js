import {GET_FILM, GET_FILM_FAILED, CLEAR_FILM} from '../types';

const reducer = (state, action) => {
    switch(action.type) {

        case GET_FILM:
            return {
                ...state,
                loading: false,
                film: action.payload,
                responseOk: action.payload.Response
            }

        case GET_FILM_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload,
                responseOk: action.payload.Response
            }

        case CLEAR_FILM:
            return {
                ...state,
                film: {},
                responseOk: true,
                loading: true
            }

        default:
            return state
    }
}

export default reducer