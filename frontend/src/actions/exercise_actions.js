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

export const requestAllExercises = () => dispatch => (
    APIUtil.getAllExercises().then( exercises => dispatch(receiveAllExercises(exercises)))
);

export const requestExercise = exerciseId => dispatch => (
    APIUtil.getExercise(exerciseId).then( exercise => dispatch(receiveExercise(exercise)))
);
