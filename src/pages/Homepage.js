import React from 'react';
import Searchbar from '../components/Searchbar';
import Logo from '../components/Logo'
import CenterDiv from '../components/Layout/CenterDiv';

//displays the logo and searchbar component. uses CenterDiv component from layouts
//to center content
const Homepage = () => {
	return (
		<CenterDiv>
            <Logo />
			<Searchbar />
		</CenterDiv>
	);
};

export default Homepage;
