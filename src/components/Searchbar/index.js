import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import {useSearchActions, useSearchContext} from '../../utils/hooks/useSearchContext';
import SearchIcon from '@material-ui/icons/Search';
import useInput from '../../utils/hooks/useInput';
import { Container, InputAdornment, TextField, Button } from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import styles from './Styles';
import SearchResults from '../SearchResults';

const Searchbar = (props) => {
	const [ search, handleChange ] = useInput('');
	const {getFilms, clearFilms} = useSearchActions()
	const {films} = useSearchContext()
	const {classes} = props;

	useEffect(() => {
		getFilms(search)
	},[getFilms, search, clearFilms])

	const handleSubmit = (e) => {
		e.preventDefault();
		props.history.push(`/movies/search/${search}`)
	}

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
									<SearchIcon/>
								</Button>
							</InputAdornment>
						)
					}}
				/>
			</form>
			{films && <SearchResults />}
		</Container>
	);
};

export default withStyles(styles)(withRouter(Searchbar));
