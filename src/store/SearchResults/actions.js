import React, { createContext, useReducer, useCallback } from 'react';
import { CLEAR_FILMS, GET_FILMS, GET_FILMS_FAILED } from '../types';
import { BASE_URI, API_KEY } from '../config';
import reducer from './reducer';
import axios from 'axios';
import { searchRequest } from '../../utils/optimiseSearch';
import initialState from './initialState';

export const SearchContext = createContext();
export const SearchActions = createContext();

export const SearchProvider = (props) => {
	const [ state, dispatch ] = useReducer(reducer, initialState);

	const getFilms = useCallback(async (searchTerm) => {
		try {
			const result = await searchRequest(`${BASE_URI}?s=${searchTerm}${API_KEY}`);
			dispatch({
				type: GET_FILMS,
				payload: result.data
			});
		} catch (err) {
			if (axios.isCancel(err)) {
				return;
			} else {
				dispatch({
					type: GET_FILMS_FAILED,
					payload: err.response.data
				});
			}
		}
	}, []);

	const clearFilms = useCallback(() => {
		dispatch({
			type: CLEAR_FILMS
		})
	},[])

	const actions = {
		getFilms,
		clearFilms
	};

	return (
		<SearchContext.Provider value={state}>
			<SearchActions.Provider value={actions}>{props.children}</SearchActions.Provider>
		</SearchContext.Provider>
	);
};
