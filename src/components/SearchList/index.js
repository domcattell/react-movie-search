import React from 'react';
import { useSearchContext } from '../../utils/hooks/useSearchContext';
import { Box } from '@material-ui/core';
import FilmCard from '../FilmCard';
import GridContainer from '../Layout/GridContainer';
import SearchHeading from '../SearchHeading';
import ErrorBoundry from '../Layout/ErrorBoundry';

const SearchList = () => {
	//pulls out the loading and error global state to pass into the loading and error container components
	const { films, loading, responseOk, errorMessage } = useSearchContext();
	
	//uses ErrorBoundry component to display error from server. 
	//maps through each film and creates a FilmCard component, passing
	//the data as props.
	return (
		<Box p={8}>
			<ErrorBoundry responseOk={responseOk} message={errorMessage}>
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
			</ErrorBoundry>
		</Box>
	);
};

export default SearchList;
