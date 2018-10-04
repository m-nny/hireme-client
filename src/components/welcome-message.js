import React from 'react';
import {Message} from "semantic-ui-react";

class WelcomeMessage extends React.Component {
	render() {
		return (
			<Message>
				<Message.Header>Welcome</Message.Header>
				<p>
					Welcome to HireMe app.
				</p>
			</Message>
		);
	}
}
export default WelcomeMessage;