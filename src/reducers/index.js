import { combineReducers } from 'redux';
import aspectReducer from './aspectReducer';

export default combineReducers({
  aspects: aspectReducer,
});
