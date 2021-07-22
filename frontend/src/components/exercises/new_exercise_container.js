import { connect } from 'react-redux';
import { createExercise } from '../../actions/exercise_actions';
import { requestConnection } from '../../actions/session_actions';
import ExerciseForm from './ExerciseForm';

const mst = (state) => {
    let userId = state.session.currentUserId || state.session.user.id
    return ({
        userId,
        errors: state.session.errors,
        connection: state,
})};

const mdt = dispatch => ({
    createExercise: (userId, exercirse) => dispatch(createExercise(userId, exercirse)),
    getConnection: (userType, userId) => dispatch(requestConnection(userType, userId))
});

export default connect(mst,mdt)(ExerciseForm);