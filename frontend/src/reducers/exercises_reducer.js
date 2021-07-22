import { 
    RECEIVEALLEXERCISES, 
    RECEIVEEXERCISE 
} from "../actions/exercise_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

  
  const ExercisesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVEALLEXERCISES:
        debugger
        return action.exercises;
      case RECEIVEEXERCISE:
        return Object.assign({}, state, {[action.exercise._id]: action.exercise});
      case RECEIVE_CURRENT_USER:
        return action.exercises;
      default:
        return state;
    }
  };
  
  export default ExercisesReducer;