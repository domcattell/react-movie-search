import React from 'react';
import { useSearchContext } from '../../utils/hooks/useSearchContext';
import FilmCard from '../FilmCard';
import GridContainer from '../Layout/GridContainer';
import { Box } from '@material-ui/core';

const SearchList = () => {
	const { films } = useSearchContext();

	return (
		<Box p={8}>
			<GridContainer>
				{films &&
					films.map((film) => (
						<FilmCard
							poster={film.Poster}
							title={film.Title}
							plot={film.Plot}
							imdbID={film.imdbID}
							key={film.imdbID}
						/>
					))}
			</GridContainer>
		</Box>
	);
};

export default SearchList;
