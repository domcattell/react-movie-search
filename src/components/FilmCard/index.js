import React from 'react';
import { Card, CardActionArea, CardContent, Typography, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './Styles';
import {Link} from 'react-router-dom';

const FilmCard = (props) => {
	const { classes, poster, title, plot, imdbID } = props;

	return (
		<Card className={classes.root}>
			<CardActionArea component={Link} to={`/movies/${imdbID}`}>
				<CardMedia component="img" image={poster} title={title} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{plot}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default withStyles(styles)(FilmCard);
