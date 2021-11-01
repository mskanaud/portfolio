import React from 'react';
import '../styles/home.scss';
import MenuBar from './MenuBar';
import FirstPage from './home/FirstPage';

const Home = () => {
	return(
		<div className="home-container">
			<div className="full-height-width-flex">
				<MenuBar />
				<FirstPage />
			</div>
			<div className="full-height-width-flex">
			</div>
			<div className="full-height-width-flex">
			</div>
		</div>

	);
}

export default Home;