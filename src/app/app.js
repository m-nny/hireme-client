import React, {Component} from 'react';
import LoginForm from '../components/user/login';
import {Route, Switch} from 'react-router-dom';
import Home from '../components/home';
import AppHeader from '../components/common/app-header';
import About from '../components/about';
import RegisterForm from '../components/user/register';
import './app.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<AppHeader/>
				<Switch>
					<Route exact path='/' render={(props) => <Home {...props}/>}/>
					<Route path='/login' render={(props) => <LoginForm {...props} />}/>
					<Route path='/register' render={(props) => <RegisterForm {...props} />}/>
					<Route path='/about' render={(props) => <About {...props} />}/>

				</Switch>
			</div>
		);
	}
}

export default App;
