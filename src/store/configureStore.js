import {applyMiddleware, createStore} from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import {composeWithDevTools} from 'remote-redux-devtools';
import axios from 'axios';

import {BACKEND_BASE_URL} from "../constants/api";
import rootReducer from "../reducers";

export default function configureStore() {
	const client = axios.create({baseURL: BACKEND_BASE_URL, responseType: 'json'});
	return createStore(rootReducer, composeWithDevTools(applyMiddleware(axiosMiddleware(client))));
}
