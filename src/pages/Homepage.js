import React from 'react';
import Searchbar from '../components/Searchbar';
import Logo from '../components/Logo'
import CenterDiv from '../components/Layout/CenterDiv';

const Homepage = () => {
	return (
		<CenterDiv>
            <Logo />
			<Searchbar />
		</CenterDiv>
	);
};

export default Homepage;
