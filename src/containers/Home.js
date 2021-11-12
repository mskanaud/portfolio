import React from 'react';
import '../styles/home.scss';
import MenuBar from './MenuBar';
import FirstPage from './home/FirstPage';
import SecondPage from './home/SecondPage';
import ThirdPage from './home/ThirdPage';

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
				<ThirdPage />
			</div>
		</div>

	);
}

export default Home;