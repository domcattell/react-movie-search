import React from 'react';
import {Link} from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Nav = () => {
	return (
		<AppBar position="static">
			<Toolbar variant="dense">
                <Typography component={Link} to="/" variant="h6">Movie Search</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Nav;
