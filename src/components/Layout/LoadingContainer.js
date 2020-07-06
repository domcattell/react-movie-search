import React from 'react';
import {CircularProgress} from '@material-ui/core';

//This component is used as container for another component
//that needs loading handling. takes in "loading" as a props
//which can be pulled from global state
const LoadingContainer = (props) => {
    if(props.loading) {
        return (<CircularProgress />)
    } else {
        return (props.children)
    }
}

export default LoadingContainer;
