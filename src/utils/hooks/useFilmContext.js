import {useContext} from 'react';
import {FilmActions, FilmContext} from '../../store/Film/actions';

//used to simplify the implentation of adding global state to components 
export const useFilmActions = () => useContext(FilmActions)
export const useFilmContext = () => useContext(FilmContext)

