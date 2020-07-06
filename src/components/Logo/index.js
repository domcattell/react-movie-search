import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Movie } from '@material-ui/icons';
import styles from './Styles';

const Logo = (props) => {
	const { classes } = props;

	return (
		<div className={classes.logo}>
			<Movie className={classes.icon} />
			<h2 className={classes.text}>
				Movie <span className={classes.subText}>Search</span>
			</h2>
		</div>
	);
};

export default withStyles(styles)(Logo);
