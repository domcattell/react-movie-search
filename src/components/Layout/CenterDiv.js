import React from 'react';
import { Box } from '@material-ui/core';

const CenterDiv = (props) => {
    return (
        // <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" flexDirection="column">
		// 	{props.children}
        // </Box>
        <Box display="flex" alignItems="center" flexDirection="column" pt={25}>
			{props.children}
		</Box>
    );
}

export default CenterDiv;
