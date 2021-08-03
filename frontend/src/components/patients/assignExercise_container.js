import { connect } from 'react-redux';
import { patientExercises, requestAssignExercise } from '../../actions/exercise_actions';
import AssignExercise from './assign_exercise';

const mstp = (state, props) => {
    const patient = state.connection[props.patientIndex];
    debugger
    return({
        patient,
        allExercises: Object.values(state.exercises),
        patientExercise: Object.values(state.patient)
    })
};

const mdtp = dispatch => ({
    assignExercise: (exerciseId, patientId) => dispatch(requestAssignExercise(exerciseId, patientId)),
    patientExercises: (userType, userId) => dispatch(patientExercises(userType, userId)),
});

export default connect(mstp, mdtp)(AssignExercise);
