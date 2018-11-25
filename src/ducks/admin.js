import axios from 'axios';
import {BACKEND_BASE_URL as URL} from '../utils/constants';

export const GET_LOGS_SUCCESS = 'hireme-client/admin/GET_LOGS_SUCCESS';

export const LOADING = 'hireme-client/admin/LOADING';
export const LOADING_FAILED = 'hireme-client/admin/LOADING_FAILED';

const initState = {loading: false, error: '', logs: []};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case GET_LOGS_SUCCESS:
			return {
				...state,
				loading: false,
				logs: action.payload
			};

		case LOADING:
			return {...state, loading: true, error: ''};

		case LOADING_FAILED:
			return {...state, loading: false, error: action.payload};

		default:
			return state;
	}
}

export function getLogs() {
	return (dispatch) => {
		dispatch({type: LOADING});
		return axios.get(`${URL}/api/logs`)
			.then(res => {
				let {data} = res;
				console.log('DATA:', res.data);
				dispatch({
					type: GET_LOGS_SUCCESS,
					payload: res.data
				});
				return Promise.resolve(data);
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
