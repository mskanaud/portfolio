import React from 'react';
import { Header } from 'semantic-ui-react';
const FirstPage = () => {
	return (
		<div className="description">
			<div>
				<h1 className="typewriter"> 
					Hello, I'm <span className="base-color">Manjeet Singh.</span>
				</h1>
				<Header as ='h1'> 
					I'm a Full Stack Web Developer.
				</Header>
			</div>
		</div>
	);
}

export default FirstPage;