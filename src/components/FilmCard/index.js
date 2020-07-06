import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Typography, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import LoadingContainer from '../Layout/LoadingContainer';
import styles from './Styles';

const FilmCard = (props) => {
	//destructure props to make the component easier to read
	//props are passed down from the SearchList component which maps
	//through the films global state
	const { classes, poster, title, plot, imdbID, loading } = props;

	//uses the Link component from react-router-dom with material ui to turn
	//the CardActionArea component into a link displaying the film page 
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
