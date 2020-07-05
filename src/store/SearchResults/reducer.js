import {GET_FILM, GET_FILM_FAILED, CLEAR_FILMS, GET_FILMS, GET_FILMS_FAILED} from '../types';

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

        case GET_FILMS:
            return {
                ...state,
                loading: false,
                films: action.payload.Search,
                totalResults: action.payload.totalResults,
                responseOk: action.payload.Response,
            }

        case GET_FILMS_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.Error,
                responseOk: action.payload.Response,
            }

        case CLEAR_FILMS:
            return {
                ...state,
                films: [],
                responseOk: true,
            }

        default:
            return state
    }
}

export default reducer