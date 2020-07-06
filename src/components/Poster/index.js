import React from 'react';
import { useFilmContext } from '../../utils/hooks/useFilmContext';
import { Card, CardMedia, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './Styles';

const Poster = (props) => {
	//uses custom hook for pulling state from context API
	const { film } = useFilmContext();
	//destructure props
	const { classes } = props;
	return (
		<Box>
			<Card className={classes.root}>
				<CardMedia component="img" alt="Image poster" width="auto" image={film.Poster} />
			</Card>
		</Box>
	);
};

//uses material UI's withStyles HOC to use custom styles
export default withStyles(styles)(Poster);
