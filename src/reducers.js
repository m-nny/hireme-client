import {combineReducers} from 'redux';

import authReducer from './ducks/auth';

const rootReducer = combineReducers({
	auth: authReducer,
});
export default rootReducer;