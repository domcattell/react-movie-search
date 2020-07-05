import React from 'react';
import { Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import { useSearchContext } from '../../utils/hooks/useSearchContext';
import { withStyles } from '@material-ui/styles';
import LinkIcon from '@material-ui/icons/Link';
import styles from './Styles';

const SearchResults = (props) => {
	const { films, totalResults } = useSearchContext();

	const { classes } = props;

	return (
		<MenuList className={classes.searchResults}>
			{films &&
				films.map((film) => (
					<Link key={film.imbdDB} to={`/movies/${film.imdbID}`}>
						<MenuItem key={film.imbdDB}>
							<LinkIcon className={classes.icon} />
							{film.Title}
						</MenuItem>
					</Link>
				))}

			{totalResults && <MenuItem className={classes.seeAll}>See all {totalResults} results</MenuItem>}
		</MenuList>
	);
};

export default withStyles(styles)(SearchResults);
