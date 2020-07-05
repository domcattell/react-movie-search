import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Logo from '../Logo';

const Nav = () => {
	return (
		<AppBar position="static">
			<Toolbar>
                <Typography>Movie Search</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Nav;
