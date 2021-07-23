import { 
  DELETEEXERCISE,
    RECEIVEALLEXERCISES, 
    RECEIVEEXERCISE 
} from "../actions/exercise_actions";

  
  const ExercisesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {};
    switch(action.type) {
      case RECEIVEALLEXERCISES:
        nextState = {};
        action.exercises.map( exercise => {
          nextState[exercise._id] = exercise
        })
        return nextState;
      case RECEIVEEXERCISE:
        // let num = state.length;
        return Object.assign({}, state, {[action.exercise._id]: action.exercise});
      case DELETEEXERCISE:
        nextState = Object.assign({}, state);
        delete nextState[action.index];
        return nextState;
      default:
        return state;
    }
  };
  
  export default ExercisesReducer;