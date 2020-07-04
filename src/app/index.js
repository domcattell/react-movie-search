import React from 'react';
import Routes from './Routes';
import { FilmProvider } from '../store/films/actions';
import './normalize.css';
import './base-styles.css';
import './font-styles.css';

function App() {
	return (
		<FilmProvider>
			<Routes />
		</FilmProvider>
	);
}

export default App;
