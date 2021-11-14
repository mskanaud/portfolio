import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from '../containers/Home';
import Projects from '../containers/Projects';


const MainRoutes = () => (
	<Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/contact-me" element={<Home />} />
		</Routes>
	</Router>
);

export default MainRoutes;