import React, { useEffect } from 'react';
import { useFilmActions } from '../utils/hooks/useFilmContext';
import { Box } from '@material-ui/core';
import Film from '../components/Film';

const FilmPage = (props) => {
	const { getFilm, clearFilm } = useFilmActions();
	const { filmID } = props.match.params;

	useEffect(
		() => {
			getFilm(filmID);
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
