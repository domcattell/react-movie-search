import React from 'react';
import {useFilmContext} from '../../utils/hooks/useFilmContext';
import {Card, CardContent, Typography, List, ListItem, Chip} from '@material-ui/core';
import {Star} from '@material-ui/icons';
import styles from './Styles';
import {withStyles} from '@material-ui/styles';

const Reviews = (props) => {
    const {film} = useFilmContext();
    const {classes} = props;
	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant="h4" gutterBottom>
					Reviews
				</Typography>
				<List />
				{film.Ratings &&
					film.Ratings.map((rating) => (
						<ListItem>
							<Typography className={classes.ratingSource}>{rating.Source}</Typography>
							<Chip color="primary" icon={<Star />} label={rating.Value} />
						</ListItem>
					))}
			</CardContent>
		</Card>
	);
};

export default withStyles(styles)(Reviews);
