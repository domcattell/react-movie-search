import React from 'react';
import { Box } from '@material-ui/core';

const CenterDiv = (props) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
			{props.children}
		</Box>
    );
}

export default CenterDiv;
