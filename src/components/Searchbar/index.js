import React, {useEffect} from 'react';
import {useSearchActions, useSearchContext} from '../../utils/hooks/useSearchContext';
import {withRouter} from 'react-router-dom'
import { Container, InputAdornment, TextField, Button } from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
import useInput from '../../utils/hooks/useInput';
import SearchDropdown from '../SearchDropdown';
import styles from './Styles';

const Searchbar = (props) => {
	const [ search, handleChange ] = useInput('');
	const {getFilms, clearFilms} = useSearchActions()
	const {films} = useSearchContext()
	const {classes} = props;

	useEffect(() => {
		getFilms(search)
		return () => {
			clearFilms();
		}
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
			{films && <SearchDropdown />}
		</Container>
	);
};

export default withStyles(styles)(withRouter(Searchbar));
