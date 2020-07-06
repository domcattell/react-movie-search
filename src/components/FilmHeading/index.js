import React from 'react';
import { useFilmContext } from '../../utils/hooks/useFilmContext';
import { Container, Typography } from '@material-ui/core';

const Heading = () => {
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
