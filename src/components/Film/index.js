import React from 'react';
import {useFilmContext} from '../../utils/hooks/useFilmContext';
import { Box } from '@material-ui/core';
import Poster from '../Poster';
import FilmHeading from '../FilmHeading';
import Reviews from '../Reviews';
import StatsList from '../StatsList';
import LoadingContainer from '../Layout/LoadingContainer';

const Film = () => {
    const {loading} = useFilmContext();

	return (
		<LoadingContainer loading={loading}>
			<Poster />
			<Box>
				<FilmHeading />
				<StatsList />
				<Reviews />
			</Box>
		</LoadingContainer>
	);
};

export default Film;
