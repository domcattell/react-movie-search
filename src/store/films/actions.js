import React, { createContext, useReducer, useCallback } from 'react';
import { GET_FILM, CLEAR_FILM, GET_FILM_FAILED, GET_FILMS, GET_FILMS_FAILED } from '../types';
import { BASE_URI, API_KEY } from '../config';
import reducer from './reducer';
import axios from 'axios';

export const FilmContext = createContext();
export const FilmActions = createContext();

export const FilmProvider = (props) => {
	const initialState = {
		loading: false,
		film: null,
		films: [],
		error: false,
		message: null
	};

	const [ state, dispatch ] = useReducer(reducer, initialState);

	const getFilm = useCallback(async (filmID) => {
		try {
			const result = await axios.get(`${BASE_URI}?i=${filmID}${API_KEY}`);
			dispatch({
				type: GET_FILM,
				payload: result.data
			});
		} catch (err) {
			dispatch({
				type: GET_FILM_FAILED
			});
		}
	}, []);

	const getFilms = useCallback(async (searchTerm) => {
		try {
			const result = await axios.get(`${BASE_URI}?s=${searchTerm}${API_KEY}`);
			dispatch({
				type: GET_FILMS,
				payload: result.data
			});
		} catch (err) {
			dispatch({
				type: GET_FILMS_FAILED
			});
		}
	}, []);

	const actions = {
		getFilm,
		getFilms
	};

	return (
		<FilmContext.Provider value={state}>
			<FilmActions.Provider value={actions}>{props.children}</FilmActions.Provider>
		</FilmContext.Provider>
	);
};
