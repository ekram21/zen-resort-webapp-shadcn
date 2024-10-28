import { combineReducers } from 'redux';
import AuthReducer from './auth';
import ApplicationReducer from './application';
import DatabaseReducer from './database';

export default combineReducers({
  auth          : AuthReducer,
  application   : ApplicationReducer,
  database      : DatabaseReducer,
});