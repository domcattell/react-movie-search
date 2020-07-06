import React from 'react';
import { useSearchContext } from '../../utils/hooks/useSearchContext';
import { Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import LinkIcon from '@material-ui/icons/Link';
import styles from './Styles';

const SearchDropdown = (props) => {
	const { films, totalResults } = useSearchContext();

	const { classes } = props;

	return (
			<MenuList className={classes.searchResults}>
				{films &&
					films.map((film) => (
						<MenuItem key={film.imdbID} component={Link} to={`/movies/${film.imdbID}`}>
							<LinkIcon className={classes.icon} />
							{film.Title}
						</MenuItem>
					))}

				{totalResults && <MenuItem className={classes.seeAll}>See all {totalResults} results</MenuItem>}
			</MenuList>
	);
};

export default withStyles(styles)(SearchDropdown);
