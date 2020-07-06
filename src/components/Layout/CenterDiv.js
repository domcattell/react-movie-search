import React from 'react';
import { Box } from '@material-ui/core';

//custom material ui Box component with specific props added to center the content
const CenterDiv = (props) => {
    return (
        <Box display="flex" alignItems="center" flexDirection="column" pt={15}>
			{props.children}
		</Box>
    );
}

export default CenterDiv;
