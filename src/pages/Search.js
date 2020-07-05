import React, { useEffect } from 'react';
import SearchList from '../components/SearchList';
import { useSearchActions } from '../utils/hooks/useSearchContext';

const Search = (props) => {
	const { getFilms } = useSearchActions();
	const { query } = props.match.params;

	useEffect(
		() => {
			getFilms(query);
		},
		[ getFilms, query ]
	);

	return <SearchList />;
};

export default Search;
