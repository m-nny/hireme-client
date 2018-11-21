import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import SignInForm from './SignInPage';
import Feed from './FeedPage';
import Welcome from './WelcomePage';
import AboutPage from './AboutPage';
import SignUpForm from './SignUpPage';
import FillProfile from './Registeration/FillProfile';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Welcome}/>
					<Route path='/feed' component={Feed}/>
					<Route path='/login' component={SignInForm}/>
					<Route path='/register' component={SignUpForm}/>
					<Route path='/about' component={AboutPage}/>
					<Route path='/fill_profile' component={FillProfile}/>
				</Switch>
			</div>
		);
	}
}

export default App;
