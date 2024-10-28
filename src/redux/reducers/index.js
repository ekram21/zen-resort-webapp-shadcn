import { combineReducers } from 'redux';

import ApplicationReducer from './application';
import DatabaseReducer from './database';

export default combineReducers({
  application   : ApplicationReducer,
  database      : DatabaseReducer,
});
