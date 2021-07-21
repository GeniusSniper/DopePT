import { connect } from 'react-redux';
import { createExercise, requestAllExercises } from '../../actions/exercise_actions';
import Exercises from './exercises';

const mst = (state, props) => {
    let userId = state.session.currentUserId 
    return ({
    currentUserId: userId,
    allExercises: Object.values(state.exercises),
    userType: props.userType
})};

const mdt = dispatch => ({
    requestAllExercises: (userType, userId) => dispatch(requestAllExercises(userType, userId)),
    createExercise: (userId, exercirse) => dispatch(createExercise(userId, exercirse)),
});

export default connect(mst,mdt)(Exercises);