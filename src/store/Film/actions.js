import React, { createContext, useReducer, useCallback } from 'react';
import { GET_FILM, CLEAR_FILM, GET_FILM_FAILED } from '../types';
import { BASE_URI, API_KEY } from '../config';
import reducer from './reducer';
import axios from 'axios';
import initialState from './initialState';

//uses the context API for global state.
//creates a context for holding state,
//and a context for holding actions
export const FilmContext = createContext();
export const FilmActions = createContext();

//creates a provider to be wrapped around components giving them access to global state
export const FilmProvider = (props) => {
	//uses useReducer hook to dispatch different types depending
	//on request
	const [ state, dispatch ] = useReducer(reducer, initialState);

	//api get request to get a film. uses the imdbID as parameter
	//this API isn't the greatest, as instead of it error response codes
	//it will still return 200, making it hard to catch the errors in the catch
	//block sometimes
	const getFilm = useCallback(async (filmID) => {
		try {
			const result = await axios.get(`${BASE_URI}?i=${filmID}${API_KEY}`);
			dispatch({
				type: GET_FILM,
				payload: result.data
			});
		} catch (err) {
			dispatch({
				type: GET_FILM_FAILED,
				payload: err.response.data
			});
		}
	}, []);

	//clears films data
	const clearFilm = useCallback(() => {
		dispatch({
			type: CLEAR_FILM
		})
	},[])

	const actions = {
		getFilm,
		clearFilm
	};

	return (
		<FilmContext.Provider value={state}>
			<FilmActions.Provider value={actions}>{props.children}</FilmActions.Provider>
		</FilmContext.Provider>
	);
};
