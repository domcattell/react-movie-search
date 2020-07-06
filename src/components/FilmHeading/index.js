import React from 'react';
import { useFilmContext } from '../../utils/hooks/useFilmContext';
import { Container, Typography } from '@material-ui/core';

const Heading = () => {
	//simple component that displays the film title and plot with state taken
	//from globals tate
	const { film } = useFilmContext();

	return (
		<Container>
			<Typography variant="h4" gutterBottom>
				{film.Title}
			</Typography>

			<Typography variant="body2" color="textSecondary" component="p">
				{film.Plot}
			</Typography>
		</Container>
	);
};

export default Heading;
