import { connect } from 'react-redux';
import { clearExercises, patientExercises, requestAssignExercise } from '../../actions/exercise_actions';
import AssignExercise from './assign_exercise';

const mstp = (state, props) => {
    const patient = state.connection[props.patientIndex];
    return({
        patient,
        allExercises: Object.values(state.exercises),
        patientExercise: Object.values(state.patient)
    })
};

const mdtp = dispatch => ({
    assignExercise: (exerciseId, patientId) => dispatch(requestAssignExercise(exerciseId, patientId)),
    patientExercises: (userType, userId) => dispatch(patientExercises(userType, userId)),
    clearPatientExercise: () => dispatch(clearExercises())
});

export default connect(mstp, mdtp)(AssignExercise);
