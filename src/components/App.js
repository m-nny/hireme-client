import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import LoginForm from './LoginPage';
import Feed from './FeedPage';
import Welcome from './WelcomePage';
import AboutPage from './AboutPage';
import RegisterForm from './RegisterPage';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Welcome}/>
					<Route path='/feed' component={Feed}/>
					<Route path='/login' component={LoginForm}/>
					<Route path='/register' component={RegisterForm}/>
					<Route path='/about' component={AboutPage}/>
				</Switch>
			</div>
		);
	}
}

export default App;
