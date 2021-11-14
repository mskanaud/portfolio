import React from 'react';
import '../styles/button.scss';
import { Link } from "react-router-dom";

const Button = props => {
	if (props.link) {
		return(
			<Link className="site-button" {...props}>
		      {props.children}
		    </Link >
		);
	}

	return(

		<a className="site-button" {...props}>
	      {props.children}
	    </a >
	);
} 

export default Button;