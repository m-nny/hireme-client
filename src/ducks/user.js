import axios from 'axios';
import {BACKEND_BASE_URL as URL} from '../constants/api';

export const GET_USER_SUCCESS = 'hireme-client/user/GET_USER_SUCCESS';
export const GET_USER_FAIL = 'hireme-client/user/GET_USER_FAIL';

export const LOADING = 'hireme-client/user/LOADING';

const initState = {loading: false, error: '', username: null};

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
		case GET_USER_FAIL:
			return {...state, loading: false, error: action.payload};

		case LOADING:
			return {...state, loading: true, error: ''};
		default:
			return state;
	}
}

export function getUserInfo() {
	return (dispatch) => {
		return axios.get(`${URL}/api/user/me`)
			.then(res => {
				let {id, username, fullname} = res.data;
				dispatch({
					type: GET_USER_SUCCESS,
					payload: {
						id, username, fullname
					}
				});
				return Promise.resolve({id, username, fullname});
			}).catch(error => {
				let {message} = error.response.data;
				dispatch({
					type: GET_USER_FAIL,
					payload: message
				});
				return Promise.reject(message);
			});
	};
}
