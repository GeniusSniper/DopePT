import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import exercises from './exercises_reducer';
import users from './users_reducer';
import connection from './connection_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  exercises,
  users,
  connection
});

export default RootReducer;