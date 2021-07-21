import * as APIUtil from '../util/exercise_api_util';

export const RECEIVEALLEXERCISES = 'RECEIVEALLEXERCISES';
export const RECEIVEEXERCISE = 'RECEIVEEXERCISE';

export const receiveAllExercises = exercises => ({
    type: RECEIVEALLEXERCISES,
    exercises
});

export const receiveExercise = exercise => ({
    type: RECEIVEEXERCISE,
    exercise
});

export const requestAllExercises = (userType) => dispatch => (
    APIUtil.getAllExercises(userType)
        .then( exercises => dispatch(receiveAllExercises(exercises.data)))
);

export const requestExercise = (userType, exerciseId) => dispatch => (
    APIUtil.getExercise(userType, exerciseId)
        .then( exercise => dispatch(receiveExercise(exercise.data)))
);
