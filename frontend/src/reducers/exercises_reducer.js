import { 
    RECEIVEALLEXERCISES, 
    RECEIVEEXERCISE 
} from "../actions/exercise_actions";

  
  const ExercisesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVEALLEXERCISES:
        return action.exercises;
      case RECEIVEEXERCISE:
        return Object.assign({}, state, {[action.exercise._id]: action.exercise});
      default:
        return state;
    }
  };
  
  export default ExercisesReducer;