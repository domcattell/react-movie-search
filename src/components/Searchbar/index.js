import React from 'react';
import Search from '@material-ui/icons/Search';
import useInput from '../../utils/hooks/useInput';
import { Container, InputAdornment, TextField, Button } from '@material-ui/core';

const Searchbar = () => {
	const [ search, handleChange ] = useInput('');

	return (
		<Container maxWidth="sm">
			<form>
				<TextField
					value={search}
					onChange={handleChange}
					variant="outlined"
					placeholder="Search"
					fullWidth
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<Search />
							</InputAdornment>
						)
					}}
				/>
			<Button>Search</Button>
			</form>
		</Container>
	);
};

export default Searchbar;
