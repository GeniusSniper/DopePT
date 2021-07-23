import * as APIUtil from '../util/exercise_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVEALLEXERCISES = 'RECEIVEALLEXERCISES';
export const RECEIVEEXERCISE = 'RECEIVEEXERCISE';
export const HIDE_EXERCISE = 'HIDE_EXERCISE';
export const DELETEEXERCISE = 'DELETEEXERCISE';
export const ASSIGN_EXERCISE = 'ASSIGN_EXERCISE';

export const receiveAllExercises = exercises => ({
    type: RECEIVEALLEXERCISES,
    exercises
});

export const receiveExercise = exercise => ({
    type: RECEIVEEXERCISE,
    exercise
});

export const deleteEcercise = index => ({
    type: DELETEEXERCISE,
    index
});

// export const assignExercise = () => ({
//     type: ASSIGN_EXERCISE,

// });

export const requestAssignExercise = (exerciseId, patientId) => dispatch => (
    APIUtil.assignExercise(exerciseId, patientId)
        // .then( () => dispatch(assignExercise()))
)

export const requestAllExercises = (userType, userId) => dispatch => (
    APIUtil.getAllExercises(userType, userId)
        .then( exercises => dispatch(receiveAllExercises(exercises.data)))
);

export const requestExercise = (userType, userId, exerciseId) => dispatch => (
    APIUtil.getExercise(userType, userId, exerciseId)
        .then( exercise => dispatch(receiveExercise(exercise.data)))
);

export const createExercise = (userId, exercise) => dispatch => (
    APIUtil.createExercise(userId, exercise)
        .then( exercise => dispatch(receiveExercise(exercise.data)), err => {
            dispatch(receiveErrors(err.response.data));
        })
);

export const removeExercise = (exerciseId) => dispatch => {
    return (
    APIUtil.deleteExercise(exerciseId)
        .then( () => dispatch(deleteEcercise(exerciseId)))
)}