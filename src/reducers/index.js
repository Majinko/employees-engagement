import { combineReducers } from 'redux';

import aspectReducer from './aspectReducer';
import authReducer from './authReducer';

export default combineReducers({
  aspects: aspectReducer,
  auth: authReducer,
});
