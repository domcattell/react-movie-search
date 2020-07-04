import React, { useContext } from 'react';
import { MenuList, MenuItem, Box } from '@material-ui/core';
import { FilmContext } from '../../store/films/actions';
import { withStyles } from '@material-ui/styles';
import LinkIcon from '@material-ui/icons/Link';
import styles from './Styles';

const SearchResults = (props) => {
	const { films } = useContext(FilmContext);

	const { classes } = props;

	return (
		<MenuList className={classes.searchResults}>
			{films.Search.map((film) => (
				<MenuItem>
					<LinkIcon className={classes.icon} />
					{film.Title}
				</MenuItem>
			))}
			<MenuItem className={classes.seeAll}>See all results: {films.totalResults}</MenuItem>
		</MenuList>
	);
};

export default withStyles(styles)(SearchResults);
