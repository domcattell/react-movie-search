import React from 'react';
import { useSearchContext } from '../../utils/hooks/useSearchContext';
import { Box, Typography, Paper } from '@material-ui/core';

const SearchHeading = () => {
	const { totalResults } = useSearchContext();

	return (
		<Box mb={3} textAlign="center">
			<Paper>
				<Typography variant="h5" color="textSecondary">
					{totalResults} results
				</Typography>
			</Paper>
		</Box>
	);
};

export default SearchHeading;
