import React from 'react';
import {withStyles} from '@material-ui/styles';
import MovieIcon from '@material-ui/icons/Movie'
import styles from './Styles';

const Logo = (props) => {
    const {classes} = props;

    return (
        <div className={classes.logo}>
            <MovieIcon className={classes.icon}/>
            <h2 className={classes.text}>Movie <span className={classes.subText}>Search</span></h2>
        </div>
    );
}

export default withStyles(styles)(Logo);
