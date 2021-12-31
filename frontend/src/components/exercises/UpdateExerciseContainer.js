import { connect } from 'react-redux';
import { updateExercise } from '../../actions/exercise_actions';
import { clearErrors, requestConnection } from '../../actions/session_actions';
import UpdateExercise from './UpdateExercise';

const mst = (state) => {
    let userId = state.session.currentUserId || state.session.user.id
    return ({
        userId,
        errors: state.errors,
        connection: state,
})};

const mdt = dispatch => ({
    updateExercise: (exercirse) => dispatch(updateExercise(exercirse)),
    getConnection: (userType, userId) => dispatch(requestConnection(userType, userId)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mst, mdt)(UpdateExercise);