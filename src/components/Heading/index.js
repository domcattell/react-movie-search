import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { useFilmContext } from '../../utils/hooks/useFilmContext';

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
