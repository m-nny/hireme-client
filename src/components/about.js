import React from 'react';
import {Message} from 'semantic-ui-react';

class About extends React.Component {
	render() {
		return (
			<Message>
				<Message.Header>About</Message.Header>
				<p>
					Some stuff about this project
				</p>
			</Message>
		);
	}
}

export default About;