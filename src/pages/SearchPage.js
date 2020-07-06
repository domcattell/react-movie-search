import React, {useEffect} from 'react';
import { useSearchActions } from '../utils/hooks/useSearchContext';
import SearchList from '../components/SearchList';
import InfiniteScroll from 'react-infinite-scroller';

const SearchPage = (props) => {
	const { getMoreFilms, clearFilms } = useSearchActions();
	const { query } = props.match.params;

	const getMoreRequests = (page) => {
		getMoreFilms(page, query);
	};

	useEffect(() => {
		return () => {
			clearFilms();
		}
	},[clearFilms])

	return (
		<InfiniteScroll pageStart={0} loadMore={getMoreRequests} hasMore={true} useWindow={true}>
			<SearchList />
		</InfiniteScroll>
	);
};

export default SearchPage;
