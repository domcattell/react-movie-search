import React from 'react';
import { useFilmContext } from '../../utils/hooks/useFilmContext';
import { withStyles } from '@material-ui/styles';
import { Paper, ListItem, Chip, List } from '@material-ui/core';
import { Schedule, Person, Note, Star, MonetizationOn } from '@material-ui/icons';
import styles from './Styles';

const StatsList = (props) => {
	const { film } = useFilmContext();
	const { classes } = props;

	//simple component using global state to display a list of film stats
	return (
		<Paper className={classes.root}>
			<List component="nav" aria-label="main mailbox folders">
				<ListItem>
					<Chip icon={<Schedule />} label={`Released in ${film.Year}`} color="secondary" />
				</ListItem>
				<ListItem>
					<Chip icon={<Person />} label={`Rated ${film.Rated}`} color="secondary" />
				</ListItem>
				<ListItem>
					<Chip icon={<Note />} label={`Written by ${film.Writer}`} color="secondary" />
				</ListItem>
				<ListItem>
					<Chip icon={<Note />} label={`Directed by ${film.Director}`} color="secondary" />
				</ListItem>
				<ListItem>
					<Chip icon={<Star />} label={`Metascore ${film.Metascore}`} color="secondary" />
				</ListItem>
				{film.BoxOffice && (
					<ListItem>
						<Chip
							icon={<MonetizationOn />}
							label={`Made ${film.BoxOffice} at the BoxOffice`}
							color="secondary"
						/>
					</ListItem>
				)}
			</List>
		</Paper>
	);
};

export default withStyles(styles)(StatsList);
