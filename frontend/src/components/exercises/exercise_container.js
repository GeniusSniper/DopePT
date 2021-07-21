import { connect } from 'react-redux';
import { requestExercise } from '../../actions/exercise_actions';
import Exercise from './exercise';

const mst = (state, props) => {
    return ({
    currentUserId: state.session.user.id,
    exercise: state.exercises[props.match.params.exerciseId]
})};

const mdt = dispatch => ({
    requestExercise: (userType, userId, exerciseId) => dispatch(requestExercise(userType, userId, exerciseId))
});

export default connect(mst,mdt)(Exercise);