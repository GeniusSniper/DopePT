import { connect } from 'react-redux';
import { requestAllExercises } from '../../actions/exercise_actions';
import Exercises from './exercises';

const mst = (state, props) => {
    let userId = state.session.currentUserId || state.session.user.id
    return ({
        currentUserId: userId,
        allExercises: Object.values(state.exercises),
        userType: props.userType,
})};

const mdt = dispatch => ({
    requestAllExercises: (userType, userId) => dispatch(requestAllExercises(userType, userId)),
});

export default connect(mst,mdt)(Exercises);