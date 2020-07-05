import React, {useContext, useEffect} from 'react';
import {SearchActions, SearchContext} from '../../store/SearchResults/actions';
import SearchIcon from '@material-ui/icons/Search';
import useInput from '../../utils/hooks/useInput';
import { Container, InputAdornment, TextField, Button } from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import styles from './Styles';
import SearchResults from '../SearchResults';

const Searchbar = (props) => {
	const [ search, handleChange ] = useInput('');
	const {getFilms, clearFilms} = useContext(SearchActions)
	const {films} = useContext(SearchContext)
	const {classes} = props;

	useEffect(() => {
		getFilms(search)

		return () => {
			clearFilms()
		}
	},[getFilms, search, clearFilms])

	const handleSubmit = (e) => {
		e.preventDefault();
		getFilms(search)
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

export default withStyles(styles)(Searchbar);
