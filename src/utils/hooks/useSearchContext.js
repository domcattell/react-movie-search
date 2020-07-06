import {useContext} from 'react';
import {SearchActions, SearchContext} from '../../store/SearchResults/actions';

//used to simplify the implentation of adding global state to components 
export const useSearchActions = () => useContext(SearchActions)
export const useSearchContext = () => useContext(SearchContext)