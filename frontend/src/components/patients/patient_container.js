import { connect } from 'react-redux'
// import { requestAllExercises } from '../../actions/exercise_actions';
import Patient from './patient'

const mSTP = (state, ownProps) => {
    const patient = state.connection[ownProps.patientId];
    return {
        patient,
        allExercises: Object.values(state.exercises),
    }
};

const mDTP = dispatch => ({
    // requestAllExercises: (userType, userId) => dispatch(requestAllExercises(userType, userId)),
});

export default connect(mSTP, mDTP)(Patient)