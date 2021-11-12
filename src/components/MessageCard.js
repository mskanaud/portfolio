import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import '../styles/messagecard.scss';

const MessageCard = props => (
    <div className="message-card">
    	<h1>{props.message.heading}</h1>
    	<p>
    		{props.message.desc}
    	</p>
    </div>
);

export default MessageCard;