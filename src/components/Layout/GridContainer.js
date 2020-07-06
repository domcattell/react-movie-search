import React from 'react';
import {makeStyles} from '@material-ui/styles';
import responsiveSizes from '../../shared/responsiveSizes';

//simple grid container for displaying the search results
const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridGap: "2em",
        justifyItems: "center",

        [responsiveSizes.down("md")]: {
            gridGap: "1em",
            justifyContent: "center"
        }
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
