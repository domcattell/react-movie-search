import {useContext} from 'react';
import {SearchActions, SearchContext} from '../../store/SearchResults/actions';

export const useSearchActions = () => useContext(SearchActions)
export const useSearchContext = () => useContext(SearchContext)