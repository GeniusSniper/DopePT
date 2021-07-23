import { 
  DELETEEXERCISE,
    RECEIVEALLEXERCISES, 
    RECEIVEEXERCISE 
} from "../actions/exercise_actions";

  
  const ExercisesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVEALLEXERCISES:
        return action.exercises;
      case RECEIVEEXERCISE:
        let num = state.length;
        return Object.assign({}, state, {[num]: action.exercise});
      case DELETEEXERCISE:
        let nextState = Object.assign({}, state);
        delete nextState[action.index];
        return nextState;
      default:
        return state;
    }
  };
  
  export default ExercisesReducer;