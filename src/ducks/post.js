import axios from 'axios';
import {BACKEND_BASE_URL as URL} from '../utils/constants';

export const GET_FEED_SUCCESS = 'hireme-client/post/GET_FEED_SUCCESS';

export const LOADING = 'hireme-client/post/LOADING';
export const LOADING_FAILED = 'hireme-client/post/LOADING_FAILED';

const initState = {loading: false, error: '', posts: []};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case GET_FEED_SUCCESS:
			return {
				...state,
				loading: false,
				posts: [...action.payload]
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

export function getFeed() {
	return (dispatch) => {
		dispatch({type: LOADING});
		return axios.get(`${URL}/api/posts/`)
			.then(res => {
				let {data} = res;
				console.log('DATA:', data);
				dispatch({
					type: GET_FEED_SUCCESS,
					payload: data
				});
				return Promise.resolve(data);
			}).catch(error => {
				console.log(error);
				let {message} = error.message;
				dispatch({
					type: LOADING_FAILED,
					payload: message
				});
				return Promise.reject(message);
			});
	};
}


