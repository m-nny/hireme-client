import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import LoginForm from '../components/login';
import Feed from '../components/feed';
import Welcome from '../components/welcome';
import About from '../components/about';
import RegisterForm from '../components/register';
import Profile from '../components/editProfile';
import './app.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Welcome}/>
					<Route path='/feed' component={Feed}/>
					<Route path='/login' component={LoginForm}/>
					<Route path='/register' component={RegisterForm}/>
					<Route path='/about' component={About}/>
					<Route path='/profile' component={Profile}/>

				</Switch>
			</div>
		);
	}
}

export default App;
