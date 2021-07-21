import { connect } from 'react-redux';
// import { requestExercise } from '../../actions/exercise_actions';
import Exercise from './exercise';

const mst = (state, props) => {
    const exercise = state.exercises[props.exerciseId];
    return ({
    currentUserId: state.session.currentUserId,
    // exercise: state.exercises[props.match.params.exerciseId]
    exercise
})};

const mdt = dispatch => ({
    // requestExercise: (userType, userId, exerciseId) => dispatch(requestExercise(userType, userId, exerciseId))
});

export default connect(mst,mdt)(Exercise);