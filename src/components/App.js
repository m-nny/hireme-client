import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import SignInForm from './SignInPage';
import UserProfile from './UserProfile'
import Feed from './FeedPage';
import Welcome from './WelcomePage';
import AboutPage from './AboutPage';
import SignUpForm from './SignUpPage';
import Registration from './Registration';
import StudentRegistration from './Registration/StudentRegistration';
import CompanyRegistration from './Registration/CompanyRegistration';
import CreateOffer from './CreateOffer';
import SignOutPage from './SignOutPage';
import CompanyProfile from "./CompanyProfile";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Welcome}/>
					<Route path='/feed' component={Feed}/>
                    <Route path='/company' component={CompanyProfile}/>
					<Route path='/login' component={SignInForm}/>
					<Route path='/register' component={SignUpForm}/>
					<Route path='/about' component={AboutPage}/>
					<Route exact path='/registration' component={Registration}/>
					<Route path='/registration/student' component={StudentRegistration}/>
					<Route path='/registration/company' component={CompanyRegistration}/>
					<Route path='/create_offer' component={CreateOffer}/>
					<Route path='/sign_out' component={SignOutPage}/>
					<Route path='/profile' component={UserProfile}/>
				</Switch>
			</div>
		);
	}
}

export default App;
