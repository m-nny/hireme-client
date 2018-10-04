import React, {Component} from 'react';
import './app.css';
import LoginForm from "../user/login";
import {Route, Switch} from "react-router-dom";
import WelcomeMessage from "../components/welcome-message";
import AppHeader from "../components/app-header";

class App extends Component {
	render() {
		return (
			<div className="App">
				<AppHeader/>
				<Switch>
					<Route exact path="/" render={(props) => <WelcomeMessage {...props}/>}/>
					<Route path="/login" render={(props) => <LoginForm {...props} />}/>

				</Switch>
			</div>
		);
	}
}

export default App;
