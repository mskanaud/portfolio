import React from 'react';
import { Header, Image } from 'semantic-ui-react';
const FirstPage = () => {
	return (
		<div className="description">
			<div>
				<h1 className="typewriter"> 
					Hello, I'm <span className="base-color">Manjeet Singh. </span> 
					Full Stack Web Developer
				</h1>
			
				<p className="p-text">
					I design and code beautifully simple things, and I love what I do.
				</p>
				<div className="msk-avatar">
					<Image src='/mf-avatar.svg' 
					size='small' circular />
				</div>
			</div>
			<div className="bottom-content">
				<Image src='/hero.svg'/>
			</div>
		</div>
	);
}

export default FirstPage;