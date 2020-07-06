import React from 'react';
import { useFilmContext } from '../../utils/hooks/useFilmContext';
import { Box, Container } from '@material-ui/core';
import Poster from '../Poster';
import FilmHeading from '../FilmHeading';
import Reviews from '../Reviews';
import StatsList from '../StatsList';
import LoadingContainer from '../Layout/LoadingContainer';
import ErrorBoundry from '../Layout/ErrorBoundry';
import {withStyles} from '@material-ui/styles';
import styles from './Styles'

const Film = (props) => {
	// use custom context hook to pull out the state loading and error handling 
	const { loading, responseOk, errorMessage } = useFilmContext();
	const {classes} = props;
	
	//uses the loading container which will display the loading spinner if global state loading
	//is set to true, else will render the component. ErrorBoundy component takes in global state
	//to check whether to display an error alert with the error message
	return (
		<Container className={classes.root}>
			<LoadingContainer loading={loading}>
				<ErrorBoundry responseOk={responseOk} message={errorMessage}>
					<Poster />
					<Box>
						<FilmHeading />
						<StatsList />
						<Reviews />
					</Box>
				</ErrorBoundry>
			</LoadingContainer>
		</Container>
	);
};

export default withStyles(styles)(Film);
