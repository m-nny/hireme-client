export const REGISTER_USER = 'hireme-client/auth/REGISTER';
export const REGISTER_USER_SUCCESS = 'hireme-client/auth/REGISTER_SUCCESS';
export const REGISTER_USER_FAIL = 'hireme-client/auth/REGISTER_FAIL';

export const GET_USER = 'hireme-client/auth/GET_USER';
export const GET_USER_SUCCESS = 'hireme-client/auth/GET_USER_SUCCESS';
export const GET_USER_FAIL = 'hireme-client/auth/GET_USER_FAIL';

export const AUTH_USER = 'hireme-client/auth/AUTH_USER';

export const LOGOUT_USER = 'hireme-client/auth/LOGOUT_USER';

const initState = {user: null, loadingUser: false, userInfo: null, loadingUserInfo: false};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case REGISTER_USER:
			return {...state, loadingUser: true};
		case GET_USER:
			return {...state, loadingUserInfo: true};
		case REGISTER_USER_FAIL:
			return {...state, loadingUser: false, user: null, error: 'error while registering user'};
		case GET_USER_FAIL:
			return {...state, loadingUserInfo: false, userInfo: null, error: 'error while registering user'};
		case REGISTER_USER_SUCCESS:
			return {...state, loadingUser: false, user: action.payload.data, error: null};
		case GET_USER_SUCCESS:
			return {...state, loadingUserInfo: false, userInfo: action.payload.data, error: null};
		case AUTH_USER:
			return {...state, loadingUser: false, user: action.data, error: null};
		case LOGOUT_USER:
			return {...state, user: null};
		default:
			return state;
	}
}

export function getUser(username) {
	return {
		type: GET_USER,
		payload: {
			request: {
				method: 'GET',
				url: `/api/user/${username}`,
				crossOrigin: true
			}
		}
	}
}

export function logoutUser() {
	return {
		type: LOGOUT_USER,
	}
}

export function authUser(user) {
	return {
		type: AUTH_USER,
		data: user,
		// payload: {
		// 	request: {
		// 		// method: 'POST',
		// 		// url: `/api/register`,
		// 		data: user,
		// 		// crossOrigin: true
		// 	}
		// }
	}
}

export function registerUser(user) {
	return {
		type: REGISTER_USER,
		payload: {
			request: {
				method: 'POST',
				url: `/api/register`,
				data: user,
				crossOrigin: true
			}
		}
	}
}