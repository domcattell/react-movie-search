import React from 'react';
import Routes from './Routes';
import { SearchProvider } from '../store/SearchResults/actions';
import { FilmProvider } from '../store/Film/actions';
import './normalize.css';
import './base-styles.css';
import './font-styles.css';
import Nav from '../components/Nav';

function App() {
	return (
		<SearchProvider>
			<FilmProvider>
				<Nav />
				<Routes />
			</FilmProvider>
		</SearchProvider>
	);
}

export default App;
