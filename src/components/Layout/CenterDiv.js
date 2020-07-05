import React from 'react';
import { Box } from '@material-ui/core';

const CenterDiv = (props) => {
    return (
        <Box display="flex" alignItems="center" flexDirection="column" pt={20}>
			{props.children}
		</Box>
    );
}

export default CenterDiv;
