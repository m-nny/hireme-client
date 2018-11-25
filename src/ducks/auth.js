import axios from 'axios';
import {SubmissionError} from 'redux-form';
import {BACKEND_BASE_URL as URL} from '../utils/constants';
import history from '../utils/history';

export const SIGN_UP_USER_SUCCESS = 'hireme-client/auth/SIGN_UP_SUCCESS';
export const SIGN_UP_USER_FAIL = 'hireme-client/auth/SIGN_UP_FAIL';


export const SIGN_IN_USER_SUCCESS = 'hireme-client/auth/SIGN_IN_USER_SUCCESS';
export const SIGN_IN_USER_FAIL = 'hireme-client/auth/SIGN_IN_USER_FAIL';

export const LOADING = 'hireme-client/auth/LOADING';

const initState = {loading: false, authenticated: false, error: ''};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case SIGN_IN_USER_SUCCESS:
			return {...state, authenticated: true, loading: false};
		case SIGN_IN_USER_FAIL:
			return {...state, authenticated: false, error: action.payload, loading: false};

		case SIGN_UP_USER_SUCCESS:
			return {...state, loading: false};
		case SIGN_UP_USER_FAIL:
			return {...state, loading: false, error: action.payload};

		case LOADING:
			return {...state, loading: true, error: ''};
		default:
			return state;
	}
}

export function signInUser({username, email, password}) {
	let usernameOrEmail = username ? username : email;
	return (dispatch) => {
		dispatch({type: LOADING});
		return axios.post(`${URL}/api/auth/signin`, {usernameOrEmail, password})
			.then(res => {
				dispatch(authenticated(res.data.accessToken));
				history.push('/feed');
				return Promise.resolve();
			}).catch(error => {
				let {message} = error.response.data;
				console.log('Error:', message);
				dispatch({type: SIGN_IN_USER_FAIL, payload: message});
				throw new SubmissionError({
					_error: 'Incorrect username or password'
				});
			});
	};
}

export function unauthenticated() {
	localStorage.clear();
	axios.defaults.headers.common['Authorization'] = '';
	history.push('/');
	return {
		type: SIGN_IN_USER_FAIL,
		payload: ''
	}
}

export function authenticated(token) {
	localStorage.setItem('user', token);
	axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	// history.push('/feed');
	return (dispatch) => dispatch({type: SIGN_IN_USER_SUCCESS});
}

export function signUpUser({fullname, username, email, password}) {
	return async (dispatch) => {
		dispatch({type: LOADING});
		return axios.post(`${URL}/api/auth/signup`, {fullname, username, email, password})
			.then(res => {
				if (res.data.success) {
					dispatch({type: SIGN_UP_USER_SUCCESS});
					return Promise.resolve();
				} else {
					dispatch({type: SIGN_UP_USER_FAIL, payload: res.data.message});
					throw new SubmissionError({
						_error: res.data.message
					});
				}
			}).catch(error => {
				dispatch({type: SIGN_UP_USER_FAIL, payload: error});
				throw new SubmissionError({
					_error: error.response.data.message || 'Some server error'
				});
			});
	};
}
