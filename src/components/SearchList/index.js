import React from 'react';
import { useSearchContext } from '../../utils/hooks/useSearchContext';
import { Box } from '@material-ui/core';
import FilmCard from '../FilmCard';
import GridContainer from '../Layout/GridContainer';
import SearchHeading from '../SearchHeading';

const SearchList = () => {
	const { films, loading } = useSearchContext();

	return (
		<Box p={8}>
				<SearchHeading />
				<GridContainer>
					{films &&
						films.map((film) => (
							<FilmCard
								poster={film.Poster}
								title={film.Title}
								plot={film.Plot}
								imdbID={film.imdbID}
								key={film.imdbID}
								loading={loading}
							/>
						))}
				</GridContainer>
		</Box>
	);
};

export default SearchList;
