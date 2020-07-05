import React from 'react';
import SearchList from '../components/SearchList';
import { useSearchActions } from '../utils/hooks/useSearchContext';
import InfiniteScroll from 'react-infinite-scroller';

const Search = (props) => {
	const { getMoreFilms } = useSearchActions();
	const { query } = props.match.params;

	const getMoreRequests = (page) => {
		getMoreFilms(page, query)
	};

	return (
		<div>
			<InfiniteScroll 
				pageStart={0} 
				loadMore={getMoreRequests}
				hasMore={true}
				useWindow={true}
			>
				<SearchList />
			</InfiniteScroll>
		</div>
	);
};

export default Search;
