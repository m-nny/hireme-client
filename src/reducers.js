import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import authReducer from './ducks/auth';
import userReducer from './ducks/user';
import postReducer from './ducks/post';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	post: postReducer,
	form: formReducer,
});
export default rootReducer;
