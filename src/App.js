import React from 'react';
import Routes from './app/Routes';
import { SearchProvider } from './store/SearchResults/actions';
import { FilmProvider } from './store/Film/actions';
import './app/normalize.css';
import './app/base-styles.css';
import './app/font-styles.css';
import Nav from './components/Nav';

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
