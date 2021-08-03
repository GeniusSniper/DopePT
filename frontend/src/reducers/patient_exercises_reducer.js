import { 
    PATIENT_EXERCISES, 
    PATIENT_EXERCISE 
  } from "../actions/exercise_actions";
  
    
    const PatientExercises = (state = {}, action) => {
      Object.freeze(state);
      let nextState = {};
      switch(action.type) {
        case PATIENT_EXERCISES:
          nextState = {};
          action.exercises.forEach( exercise => {
            nextState[exercise._id] = exercise
          })
          return nextState;
        case PATIENT_EXERCISE:
          // let num = state.length;
          return Object.assign({}, state, {[action.exercise._id]: action.exercise});
        default:
          return state;
      }
    };
    
    export default PatientExercises;