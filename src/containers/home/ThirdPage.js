import React from 'react';
import MessageCard from '../../components/MessageCard';
import messageCards from '../../const/messageCards';

const ThirdPage = () => (
	<div className="third-page">
		<div>
			<div className="flex-center ">
				<h1>WHY DO I LOVE TO WORK AS DEVELOPER?</h1>
			</div>
		</div>
		<div className="card-container flex-center">
			<div className = "message-card-continer">
				<div className="cards-group">
					<MessageCard message = {messageCards[0]}/>
					<MessageCard message = {messageCards[1]}/>
				</div>
				<div className="cards-group">
					<MessageCard message = {messageCards[2]}/>
					<MessageCard message = {messageCards[3]}/>
				</div>
			</div>
		</div>
	</div>
);

export default ThirdPage;