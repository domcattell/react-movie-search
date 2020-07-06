import React from 'react';
import {Alert} from '@material-ui/lab';

const ErrorBoundry = (props) => {
    //takes in three props for either displaying an error alert or the component
    //this component is used as wrapper in another component to conditionally
    //display either the error or component
    const {responseOk, message, children} = props;

    //explicitly check whether response is "False" as for some reason the API uses a string
    //and not a boolean
    if(responseOk === "False") {
        return (<Alert variant="filled" severity='error'>{message}</Alert>)
    } else {
        return children
    }
}

export default ErrorBoundry;
