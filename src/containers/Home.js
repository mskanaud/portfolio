import React from 'react';
import '../styles/home.scss';
import MenuBar from './MenuBar';
import FirstPage from './home/FirstPage';
import SecondPage from './home/SecondPage';

const Home = () => {
	return(
		<div className="home-container">
			<div className="flex-full-page">
				<MenuBar />
				<FirstPage />
			</div>
			<div className="flex-full-page">
				<SecondPage />
			</div>
			<div className="flex-full-page">
			</div>
		</div>

	);
}

export default Home;