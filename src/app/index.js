import React from 'react';
import Routes from './Routes';
import { SearchProvider } from '../store/SearchResults/actions';
import { FilmProvider } from '../store/Film/actions';
import './normalize.css';
import './base-styles.css';
import './font-styles.css';

function App() {
	return (
		<SearchProvider>
			<FilmProvider>
				<Routes />
			</FilmProvider>
		</SearchProvider>
	);
}

export default App;
