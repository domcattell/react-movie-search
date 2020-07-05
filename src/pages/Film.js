import React, {useEffect } from 'react';
import { Box } from '@material-ui/core';
import Poster from '../components/Poster';
import { useFilmActions } from '../utils/hooks/useFilmContext';
import Heading from '../components/Heading';
import StatsList from '../components/StatsList';
import Reviews from '../components/Reviews';

const Film = (props) => {
	const { getFilm } = useFilmActions();
	const { filmID } = props.match.params;

	useEffect(
		() => {
			getFilm(filmID);
		},
		[ getFilm, filmID ]
	);

	return (
		<Box p={5} display="flex" flexDirection="row" justifyContent="center">
			<Poster />
			<Box>
				<Heading />
				<StatsList />
				<Reviews />
			</Box>
		</Box>
	);
};

export default Film;
