export const SIGN_UP_USER = 'hireme-client/auth/SIGN_UP';
export const SIGN_UP_USER_SUCCESS = 'hireme-client/auth/SIGN_UP_SUCCESS';
export const SIGN_UP_USER_FAIL = 'hireme-client/auth/SIGN_UP_FAIL';

export const SIGN_IN_USER = 'hireme-client/auth/SIGN_IN_USER';
export const SIGN_IN_USER_SUCCESS = 'hireme-client/auth/SIGN_IN_USER_SUCCESS';
export const SIGN_IN_USER_FAIL = 'hireme-client/auth/SIGN_IN_USER_FAIL';

export const SIGN_OUT_USER = 'hireme-client/auth/SIGN_OUT_USER';
export const AUTHENTICATED = 'hireme-client/auth/AUTHENTICATED';

const initState = {loading: false, authenticated: false};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case SIGN_IN_USER:
			return {...state, authenticated: false, loading: true};
		case SIGN_IN_USER_SUCCESS:
			return {...state, authenticated: true, loading: false};
		case SIGN_IN_USER_FAIL:
			return {...state, error: action.error, loading: false};

		case SIGN_UP_USER:
			return {...state, loading: true};
		case SIGN_UP_USER_SUCCESS:
			return {...state, loading: false};
		case SIGN_UP_USER_FAIL:
			return {...state, loading: false, error: action.payload};

		case AUTHENTICATED:
			return {...state, authenticated: true};
		case SIGN_OUT_USER:
			return {...state, authenticated: false};

		default:
			return state;
	}
}

export function signInUser({username, email, password}) {
	let usernameOrEmail = username ? username : email;
	return {
		type: SIGN_IN_USER,
		payload: {
			request: {
				url: '/api/auth/signin',
				method: 'POST',
				data: {
					usernameOrEmail,
					password
				}
			}
		}
	};
}

export function signOutUser() {
	localStorage.clear();
	return {
		type: SIGN_OUT_USER
	}
}

export function authenticated() {
	return {
		type: AUTHENTICATED
	}
}

export function signUpUser({fullname, username, email, password}) {
	return {
		type: SIGN_UP_USER,
		payload: {
			request: {
				url: '/api/auth/signup',
				method: 'POST',
				data: {
					fullname,
					username,
					email,
					password
				}
			}
		}
	};
}
