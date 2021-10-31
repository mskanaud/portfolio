import React from 'react';
import '../styles/button.scss';

const Button = props => {
	return(
		<a className="site-button" {...props}>
	      {props.children}
	    </a >
	);
} 

export default Button;