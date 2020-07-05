import {useContext} from 'react';
import {FilmActions, FilmContext} from '../../store/Film/actions';

export const useFilmActions = () => useContext(FilmActions)
export const useFilmContext = () => useContext(FilmContext)

