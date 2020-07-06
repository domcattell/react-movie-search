import React, { useEffect } from 'react';
import { useFilmActions } from '../utils/hooks/useFilmContext';
import { Box } from '@material-ui/core';
import Film from '../components/Film';

const FilmPage = (props) => {
	//uses custom hook to access film context state
	const { getFilm, clearFilm } = useFilmActions();
	const { filmID } = props.match.params;

	//uses getFilm from global state to fetch film data and stores it in film state
	useEffect(
		() => {
			getFilm(filmID);
			//cleanup function to remove film data on component dismount
			return () => {
				clearFilm();
			};
		},
		[ getFilm, filmID, clearFilm ]
	);
	
	return (
		<Box p={5} display="flex" flexDirection="row" justifyContent="center">
			<Film />
		</Box>
	);
};

export default FilmPage;
