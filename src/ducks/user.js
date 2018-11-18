import axios from 'axios';
import {BACKEND_BASE_URL as URL} from '../utils/constants';

export const GET_USER_SUCCESS = 'hireme-client/user/GET_USER_SUCCESS';

export const GET_USER_DETAILS_SUCCESS = 'hireme-client/user/GET_USER_DETAILS_SUCCESS';

export const SET_USER_DETAILS_SUCCESS = 'hireme-client/user/SET_USER_DETAILS_SUCCESS';

export const LOADING = 'hireme-client/user/LOADING';
export const LOADING_FAILED = 'hireme-client/user/LOADING_FAILED';

const initState = {loading: false, error: '', username: null, details: {}};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case GET_USER_SUCCESS:
			return {
				...state,
				loading: false,
				id: action.payload.id,
				username: action.payload.username,
				fullname: action.payload.fullname
			};

		case GET_USER_DETAILS_SUCCESS:
			return {
				...state,
				loading: false,
				details: action.payload
			};

		case SET_USER_DETAILS_SUCCESS:
			return {
				...state,
				loading: false,
			};

		case LOADING:
			return {...state, loading: true, error: ''};

		case LOADING_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
}

export function getUserInfo() {
	return (dispatch) => {
		dispatch({type: LOADING});
		return axios.get(`${URL}/api/user/me`)
			.then(res => {
				let {id, username, fullname} = res.data;
				console.log("DATA:", res.data);
				dispatch({
					type: GET_USER_SUCCESS,
					payload: {
						id, username, fullname
					}
				});
				return Promise.resolve({id, username, fullname});
			}).catch(error => {
				console.log(error);
				let {message} = error.response.data;
				dispatch({
					type: LOADING_FAILED,
					payload: message
				});
				return Promise.reject(message);
			});
	};
}

export function getUserProfile(username) {
	username = username.trim() || "";
	if (username === "")
		return;
	console.log(`${URL}/api/users/${username}`);
	return (dispatch) => {
		dispatch({type: LOADING});
		return axios.get(`${URL}/api/users/${username}`)
			.then(res => {
				let details = res.data;
				console.log("DATA details:", details);
				dispatch({
					type: GET_USER_DETAILS_SUCCESS,
					payload: details
				});
				return Promise.resolve(details);
			}).catch(error => {
				console.log(error);
				let {message} = error.response.data;
				dispatch({
					type: LOADING_FAILED,
					payload: message
				});
				return Promise.reject(message);
			});
	};
}

export function setUserProfile(details) {
	return (dispatch) => {
		dispatch({type: LOADING});
		console.log("---->", details);
		return axios.post(`${URL}/api/user/me`, details)
			.then(res => {
				console.log("RES:", res.data);
				if (res.data.success) {
					return dispatch({type: SET_USER_DETAILS_SUCCESS});
				} else {
					dispatch({type: LOADING_FAILED, payload: res.data.message});
					return Promise.reject();
				}
			}).catch(error => {
				let {message} = error.response.data;
				dispatch({type: LOADING_FAILED, payload: message});
				return Promise.reject();
			});
	};
}
