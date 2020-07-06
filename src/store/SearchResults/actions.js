import React, { createContext, useReducer, useCallback } from 'react';
import { CLEAR_FILMS, GET_FILMS, GET_FILMS_FAILED, GET_MORE_FILMS } from '../types';
import { BASE_URI, API_KEY } from '../config';
import { searchRequest } from '../../utils/helpers/optimiseSearch';
import reducer from './reducer';
import axios from 'axios';
import initialState from './initialState';

//uses the context API for global state.
//creates a context for holding state,
//and a context for holding actions
export const SearchContext = createContext();
export const SearchActions = createContext();

export const SearchProvider = (props) => {
	//uses useReducer hook to dispatch different types depending
	//on request
	const [ state, dispatch ] = useReducer(reducer, initialState);

	//get request to search for films. used with live searching where the user
	//dynmically types something, and a list response will appear in real time
	//showing available search results
	//this API isn't the greatest, as instead of it error response codes
	//it will still return 200, making it hard to catch the errors in the catch
	//block sometimes
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
				});
			}
		}
	}, []);


	//get request to load more films. each page has a limit of 10 results
	//this action is used with an npm package to allow infinite scrolling, dynamically
	//loading the next page result once the user gets to the bottom of the window
	//and stores the results in the "films" state, along with its previous data
	const getMoreFilms = useCallback(async (page, query) => {
		try {
			const result = await axios.get(`${BASE_URI}?s=${query}&page=${page}${API_KEY}`)
			dispatch({
				type: GET_MORE_FILMS,
				payload: result.data
			})
		} catch(err) {
			dispatch({
				type: GET_FILMS_FAILED,
				payload: err.response.data
			})
		}
	}, [])

	//clear search state
	const clearFilms = useCallback(() => {
		dispatch({
			type: CLEAR_FILMS
		})
	},[])

	const actions = {
		getFilms,
		clearFilms,
		getMoreFilms
	};

	return (
		<SearchContext.Provider value={state}>
			<SearchActions.Provider value={actions}>{props.children}</SearchActions.Provider>
		</SearchContext.Provider>
	);
};
