import { connect } from 'react-redux';
import { requestAllExercises } from '../../actions/exercise_actions';
import Exercises from './exercises';

const mst = state => ({
    currentUserId: state.session.user.id,
    allExercises: Object.values(state.exercises)
});

const mdt = dispatch => ({
    requestAllExercises: (userType, userId) => dispatch(requestAllExercises(userType, userId)),
});

export default connect(mst,mdt)(Exercises);