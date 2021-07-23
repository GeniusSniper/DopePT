import * as APIUtil from '../util/exercise_api_util';

export const RECEIVEALLEXERCISES = 'RECEIVEALLEXERCISES';
export const RECEIVEEXERCISE = 'RECEIVEEXERCISE';
export const HIDE_EXERCISE = 'HIDE_EXERCISE';
export const DELETEEXERCISE = 'DELETEEXERCISE';

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
})



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
        .then( exercise => dispatch(receiveExercise(exercise.data)))
);

export const removeExercise = (exerciseId, index) => dispatch => (
    APIUtil.deleteExercise(exerciseId)
        .then( () => dispatch(deleteEcercise(index)))
)