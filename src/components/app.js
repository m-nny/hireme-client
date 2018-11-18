import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import LoginForm from './login';
import Feed from './feed';
import Welcome from './welcome';
import About from './about';
import RegisterForm from './register';
import Profile from './editProfile';

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
