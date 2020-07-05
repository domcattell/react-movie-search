import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridGap: "2em",
        justifyItems: "center",
    }
})

const GridContainer = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {props.children}
        </div>
    );
}

export default (GridContainer);
