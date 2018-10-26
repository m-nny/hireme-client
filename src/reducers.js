import {combineReducers} from 'redux';

import authReducer from './ducks/auth';
import userReducer from './ducks/user';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer
});
export default rootReducer;