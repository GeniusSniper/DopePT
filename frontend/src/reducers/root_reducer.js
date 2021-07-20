import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import exercises from './exercises_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  exercises,
});

export default RootReducer;