import { connect } from 'react-redux';
import { requestAllExercises, requestAssignExercise } from '../../actions/exercise_actions';
import AssignExercise from './assign_exercise';

const mstp = (state, props) => {
    const patient = state.connection[props.patientIndex];
        debugger
        return({
        patient,
        allExercises: Object.values(state.exercises),
        patientExercise: null
    })
};

const mdtp = dispatch => ({
    assignExercise: (exerciseId, patientId) => dispatch(requestAssignExercise(exerciseId, patientId)),
    requestAllExercises: (userType, userId) => dispatch(requestAllExercises(userType, userId)),
});

export default connect(mstp, mdtp)(AssignExercise);
