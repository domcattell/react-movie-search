import React, {useContext, useEffect} from 'react';
import {FilmActions, FilmContext} from '../../store/films/actions';
import SearchIcon from '@material-ui/icons/Search';
import useInput from '../../utils/hooks/useInput';
import { Container, InputAdornment, TextField, Button } from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import styles from './Styles';
import SearchResults from '../SearchResults';

const Searchbar = (props) => {
	const [ search, handleChange ] = useInput('');
	const {getFilms} = useContext(FilmActions)
	const {films} = useContext(FilmContext)
	const {classes} = props;

	useEffect(() => {
		//using setTimeout here probably isn't the best practice
		//but as the api key has a 1000 request limit, it helps
		//try to keep the request amount lower
		setTimeout(() => {
			getFilms(search)
		},500)

	},[getFilms, search])

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
			{films.Search && <SearchResults />}
		</Container>
	);
};

export default withStyles(styles)(Searchbar);
