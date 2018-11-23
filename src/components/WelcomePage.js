import React from 'react';
import {withRouter} from 'react-router-dom';

import '../styles/WelcomePage.sass';

const description = '/*The place where enthusiastic students meet innovative IT projects and help to solve real-life problems*/';

class WelcomePage extends React.Component {
	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	render() {
		return (
			<div id="welcome">
				<div className="title">HireMe.kz</div>
				<div className="description"> {description} </div>
				<button onClick={() => this.onClickHandler('login')}>Sign in</button>
				<button onClick={() => this.onClickHandler('register')}>Sign up</button>
			</div>
		);
	}

	onClickHandler(name) {
		this.props.history.push('/' + name);
		console.log(`goto: ${name}`);
	}
}

export default withRouter(WelcomePage);
