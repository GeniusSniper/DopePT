import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import exercises from './exercises_reducer';
import users from './users_reducer';
import connection from './connection_reducer';
import patient from './patient_exercises_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  exercises,
  users,
  connection,
  patient
});

export default RootReducer;