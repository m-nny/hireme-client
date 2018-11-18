import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export default function configureStore() {
	return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
