import React, { useEffect } from 'react';
import { useSearchActions, useSearchContext } from '../utils/hooks/useSearchContext';
import SearchList from '../components/SearchList';
import InfiniteScroll from 'react-infinite-scroller';
import useGetMoreFilms from '../utils/hooks/useGetMoreFilms';

const SearchPage = (props) => {
	const { getMoreFilms, clearFilms } = useSearchActions();
	const { totalResults, films } = useSearchContext();
	const { query } = props.match.params;
	const [ getMoreRequests, hasMorePages ] = useGetMoreFilms(films, query, getMoreFilms, totalResults);

	//used to cleanup films global state on component dismount
	useEffect(
		() => {
			return () => {
				clearFilms();
			};
		},
		[ clearFilms ]
	);

	//uses react-infinite-scroller package to request more films from api. custom useGetMoreFilms hook is used
	//to fill in the props to keep the component cleaner and could be re used for the app in the future
	//as you can set request parameters on which type of content to search for (films, tv shows etc...)
	//as more films get added, the SearchList component is re rendered with the new data visible
	return (
		<InfiniteScroll pageStart={0} loadMore={getMoreRequests} hasMore={hasMorePages} useWindow={true}>
			<SearchList />
		</InfiniteScroll>
	);
};

export default SearchPage;
