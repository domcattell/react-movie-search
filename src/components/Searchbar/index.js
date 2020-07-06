import React, { useEffect } from 'react';
import { useSearchActions } from '../../utils/hooks/useSearchContext';
import { withRouter } from 'react-router-dom';
import { Container, InputAdornment, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
import useInput from '../../utils/hooks/useInput';
import SearchDropdown from '../SearchDropdown';
import styles from './Styles';

const Searchbar = (props) => {
	//custom input hook to keep the component cleaner
	const [ search, handleChange ] = useInput('');
	//pulls actions from custom hook for accessing context API
	//these are used to request data from the server
	const { getFilms, clearFilms } = useSearchActions();
	const { classes } = props;

	//useEffect here will re render the component any time the search state changes
	//which in turn sends a new request to the API to allow live searching based on
	//the search context
	useEffect(
		() => {
			//if search local state is truthy, then use getFilms from global state
			//to start requests to the API. will pull new data each time the user types
			//if the search state changes whilst a request is pending, that request will be
			//cancelled and the more up date one will be called instead. This saves hammering
			//the API with every letter types
			if (search) {
				getFilms(search);
			}
			//cleanup function to wipe the global state. This could be further optimised
			//to check whether the new data matches the current global state to stop some
			//unecessary re renders, however this works well in this context
			return () => {
				clearFilms();
			};
		},
		[ getFilms, search, clearFilms ]
	);

	//on submit use react-router-doms history prop to send the user to a search results page
	const handleSubmit = (e) => {
		e.preventDefault();
		props.history.push(`/movies/search/${search}`);
	};

	return (
		<Container maxWidth="sm">
			<form className={classes.searchbar} onSubmit={handleSubmit}>
				<TextField
					value={search}
					onChange={handleChange}
					variant="outlined"
					placeholder="Search"
					fullWidth
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<Button type="submit">
									<SearchIcon />
								</Button>
							</InputAdornment>
						)
					}}
				/>
			</form>
			{search.length > 1 && <SearchDropdown />}
		</Container>
	);
};

//uses withStyles HOC from material UI and withRouter from react-router-dom to get access to history props
export default withStyles(styles)(withRouter(Searchbar));
