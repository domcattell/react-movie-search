import { CLEAR_FILMS, GET_FILMS, GET_FILMS_FAILED, GET_MORE_FILMS } from '../types';

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
	switch (action.type) {
		case GET_FILMS:
			return {
				...state,
				loading: false,
				films: action.payload.Search,
				totalResults: parseInt(action.payload.totalResults),
				responseOk: action.payload.Response,
				errorMessage: action.payload.Error
			};

		case GET_MORE_FILMS:
			return {
				...state,
				films: action.payload.Search ? [ ...state.films, ...action.payload.Search ] : null,
				responseOk: action.payload.Response,
				totalResults: parseInt(action.payload.totalResults),
				errorMessage: action.payload.Error,
				loading: false
			};

		case GET_FILMS_FAILED:
			return {
				...state,
				loading: false,
				errorMessage: action.payload.Error,
				responseOk: action.payload.Response,
				films: []
			};

		case CLEAR_FILMS:
			return {
				...state,
				responseOk: true,
				totalResults: null,
				errorMessage: null,
				loading: true,
				films: []
			};

		default:
			return state;
	}
};

export default reducer;
