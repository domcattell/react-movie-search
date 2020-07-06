import React from 'react';
import { useSearchContext } from '../../utils/hooks/useSearchContext';
import { Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import LinkIcon from '@material-ui/icons/Link';
import styles from './Styles';

const SearchDropdown = (props) => {
	//get films global state from context API
	const { films } = useSearchContext();

	const { classes } = props;

	//this component displays the live searched information dynamically
	//depending on the "films" global state. it maps through the list of
	//films and displays a menu item with the film title for each film
	return (
		<MenuList className={classes.searchResults}>
			{films &&
				films.map((film) => (
					<MenuItem key={film.imdbID} component={Link} to={`/movies/${film.imdbID}`}>
						<LinkIcon className={classes.icon} />
						{film.Title}
					</MenuItem>
				))}
		</MenuList>
	);
};

export default withStyles(styles)(SearchDropdown);
