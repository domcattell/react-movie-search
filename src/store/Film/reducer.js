import {GET_FILM, GET_FILM_FAILED, CLEAR_FILM} from '../types';

//reducer function update the global state
//depending on the dispatch type.
//the FAILED dispatch was a struggle to add here
//as the api doesn't always use error response codes,
//and thus the catch block used in the actions with axios
//won't always pick up the response data. One fix to remedy
//this was adding the errorMessage in the normal GET dispatches
//in case the api sends a 200 response but still for some reason displays
//an error message
const reducer = (state, action) => {
    switch(action.type) {

        case GET_FILM:
            return {
                ...state,
                loading: false,
                film: action.payload,
                responseOk: action.payload.Response,
                errorMessage: action.payload.Error
            }

        case GET_FILM_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload.Error,
                responseOk: action.payload.Response
            }

        case CLEAR_FILM:
            return {
                ...state,
                film: {},
                responseOk: true,
                loading: true,
                errorMessage: null
            }

        default:
            return state
    }
}

export default reducer