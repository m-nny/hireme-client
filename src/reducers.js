import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import authReducer from './ducks/auth';
import userReducer from './ducks/user';
import postReducer from './ducks/post';
import adminReducer from './ducks/admin';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	post: postReducer,
	form: formReducer,
	admin: adminReducer,
});
export default rootReducer;
