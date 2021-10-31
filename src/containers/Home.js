import React from 'react';
import '../styles/home.scss';
import MenuBar from './MenuBar';
import FirstPage from './home/FirstPage';

const Home = () => {
	return(
		<div className="home_container">
			<MenuBar />
			<FirstPage />
		</div>

	);
}

export default Home;