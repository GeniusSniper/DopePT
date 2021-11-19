import * as APIUtil from "../util/exercise_api_util";
import { receiveErrors } from "./session_actions";

export const RECEIVEALLEXERCISES = "RECEIVEALLEXERCISES";
export const RECEIVEEXERCISE = "RECEIVEEXERCISE";
export const HIDE_EXERCISE = "HIDE_EXERCISE";
export const DELETEEXERCISE = "DELETEEXERCISE";
// export const ASSIGN_EXERCISE = 'ASSIGN_EXERCISE';
export const PATIENT_EXERCISES = "PATIENT_EXERCISES";
export const PATIENT_EXERCISE = "PATIENT_EXERCISE";
export const CLEAR_PATIENT_EXERCISE = "CLEAR_PATIENT_EXERCISE";
export const REMOVE_PATIENT_EXERCISE = "REMOVE_PATIENT_EXERCISE";

export const receiveAllExercises = (exercises) => ({
  type: RECEIVEALLEXERCISES,
  exercises,
});

export const receiveExercise = (exercise) => ({
  type: RECEIVEEXERCISE,
  exercise,
});

export const deleteEcercise = (index) => ({
  type: DELETEEXERCISE,
  index,
});

export const receivePaticentExercises = (exercises) => ({
  type: PATIENT_EXERCISES,
  exercises,
});

export const receivePaticentExercise = (exercise) => ({
  type: PATIENT_EXERCISE,
  exercise,
});

export const removePatientExercise = (exerciseId) => ({
  type: REMOVE_PATIENT_EXERCISE,
  exerciseId,
});

export const clearExercises = () => ({
  type: CLEAR_PATIENT_EXERCISE,
});

export const requestAssignExercise = (exerciseId, patientId) => (dispatch) =>
  APIUtil.assignExercise(exerciseId, patientId).then((exercise) =>
    dispatch(receivePaticentExercise(exercise.data))
  );

export const removeAssignExercise = (exerciseId, patientId) => (dispatch) =>
  APIUtil.removePatientExercise(exerciseId, patientId).then(() =>
    dispatch(removePatientExercise(exerciseId))
  );

export const requestAllExercises = (userType, userId) => (dispatch) =>
  APIUtil.getAllExercises(userType, userId).then((exercises) =>
    dispatch(receiveAllExercises(exercises.data))
  );

export const patientExercises = (userType, userId) => (dispatch) =>
  APIUtil.getAllExercises(userType, userId).then((exercises) =>
    dispatch(receivePaticentExercises(exercises.data))
  );

// export const requestPatientExercise = (userType, userId) => dispatch => (
//     APIUtil.getAllExercises(userType, userId)
//         .then( exercises => dispatch(receiveExercise(exercises.data)))
// );

export const createExercise = (userId, exercise) => (dispatch) =>
  APIUtil.createExercise(userId, exercise).then(
    (exercise) => dispatch(receiveExercise(exercise.data)),
    (err) => {
      dispatch(receiveErrors(err.response.data));
    }
  );

export const removeExercise = (exerciseId) => (dispatch) => {
  return APIUtil.deleteExercise(exerciseId).then(() =>
    dispatch(deleteEcercise(exerciseId))
  );
};
