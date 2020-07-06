import React from 'react';
import { useSearchContext } from '../../utils/hooks/useSearchContext';
import { Box, Typography, Paper } from '@material-ui/core';
import LoadingContainer from '../Layout/LoadingContainer';

const SearchHeading = () => {
	const { totalResults, loading } = useSearchContext();

	//simple component for displaying amount of search results. uses totalResults
	//from global state
	return (
		<Box mb={3} textAlign="center">
			<Paper>
				<LoadingContainer loading={loading}>
					<Typography variant="h5" color="textSecondary">
						{totalResults ? `${totalResults} results` : 'No results found'}
					</Typography>
				</LoadingContainer>
			</Paper>
		</Box>
	);
};

export default SearchHeading;
