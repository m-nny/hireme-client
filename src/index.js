import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './app/app';
import * as serviceWorker from './serviceWorker';
import history from './history';
import './styles/index.sass';
import {authenticated} from './ducks/auth';

const store = configureStore();

const user = localStorage.getItem("user");
if (user)
	store.dispatch(authenticated(user));

ReactDOM.render((
		<Provider store={store}>
			<Router history={history}>
				<App/>
			</Router>
		</Provider>
	),
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
