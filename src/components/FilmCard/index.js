import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Typography, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import LoadingContainer from '../Layout/LoadingContainer';
import styles from './Styles';

const FilmCard = (props) => {
	const { classes, poster, title, plot, imdbID, loading } = props;

	return (
		<Card className={classes.root}>
			<LoadingContainer loading={loading}>
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
			</LoadingContainer>
		</Card>
	);
};

export default withStyles(styles)(FilmCard);
