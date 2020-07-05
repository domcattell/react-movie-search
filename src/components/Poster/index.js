import React, { useContext } from 'react';
import { FilmContext } from '../../store/Film/actions';
import { Card, CardMedia, CardActionArea, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './Styles';

const Poster = (props) => {
	const { film } = useContext(FilmContext);
	const { classes } = props;
	return (
		<Card className={classes.root}>
				<CardMedia
					component="img"
					alt="Image poster"
                    width="auto"
					image={film.Poster}
				/>
		</Card>
	);
};

export default withStyles(styles)(Poster);
