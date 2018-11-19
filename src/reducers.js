import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import authReducer from './ducks/auth';
import userReducer from './ducks/user';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	form: formReducer
});
export default rootReducer;
