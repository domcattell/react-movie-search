import  {useState} from 'react';

//hook to get fetch more data from an API.
//takes in the state to add to, a query for the request,
//the request function and total results which is converted
//to a page limit, telling the infinite scroller package 
//when to stop listening for event calls and stop fetching data
const useGetMoreFilms = (films, query, requestFn, totalResults) => {
    const [hasMorePages, setMorePages] = useState(true);

	const getMoreRequests = (page) => {
		let roundTotalResults = Math.round(totalResults / 10) * 10;
		let pageLimit = roundTotalResults / 100 * 10;

		if(films) {
			requestFn(page, query);
		}
		if(page === pageLimit) {
			setMorePages(false)
		}
    };

    return [getMoreRequests, hasMorePages]
}

export default useGetMoreFilms;
