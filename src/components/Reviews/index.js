import React from 'react';
import {useFilmContext} from '../../utils/hooks/useFilmContext';
import {Card, CardContent, Typography, List, ListItem, Chip} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import {Star} from '@material-ui/icons';
import styles from './Styles';

const Reviews = (props) => {
    const {film} = useFilmContext();
	const {classes} = props;
	
	//this component maps through the list of ratings for a film
	//and displats them as a list item
	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant="h4" gutterBottom>
					Reviews
				</Typography>
				<List />
				{film.Ratings &&
					film.Ratings.map((rating) => (
						<ListItem key={rating.Source}>
							<Typography className={classes.ratingSource}>{rating.Source}</Typography>
							<Chip color="primary" icon={<Star />} label={rating.Value} />
						</ListItem>
					))}
			</CardContent>
		</Card>
	);
};

//uses withStyles HOC from material UI to use custom styles. CSS to JS
export default withStyles(styles)(Reviews);
