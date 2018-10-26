import React, {Component} from 'react';
import LoginForm from '../components/user/login';
import {Route, Switch} from 'react-router-dom';
import Home from '../components/home';
import AppHeader from '../components/common/app-header';
import About from '../components/about';
import RegisterForm from '../components/user/register';
import Profile from '../components/user/profile';
import './app.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<AppHeader/>
				<Switch>
					<Route exact path='/' component={Home}/>
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
