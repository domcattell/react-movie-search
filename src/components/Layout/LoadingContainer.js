import React from 'react';
import {CircularProgress} from '@material-ui/core';

const LoadingContainer = (props) => {
    if(props.loading) {
        return (<CircularProgress />)
    } else {
        return (props.children)
    }
}

export default LoadingContainer;
