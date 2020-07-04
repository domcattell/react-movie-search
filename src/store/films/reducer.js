import {GET_FILM, GET_FILM_FAILED, CLEAR_FILM, GET_FILMS, GET_FILMS_FAILED} from '../types';

const reducer = (state, action) => {
    switch(action.type) {

        case GET_FILM:
            return {
                ...state,
                loading: false,
                film: action.payload
            }

        case GET_FILM_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }

        case GET_FILMS:
            return {
                ...state,
                loading: false,
                films: action.payload
            }

        case GET_FILMS_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }

        default:
            return state
    }
}

export default reducer