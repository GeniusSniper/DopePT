import { connect } from 'react-redux';
import { requestAssignExercise } from '../../actions/exercise_actions';
import AssignExercise from './assign_exercise';

const mstp = (state, props) => {
    const patient = state.connection[props.patientIndex]
    return({
        patient,
        allExercises: Object.values(state.exercises)
    })
};

const mdtp = dispatch => ({
    assignExercise: (exerciseId, patientId) => dispatch(requestAssignExercise(exerciseId, patientId))
});

export default connect(mstp, mdtp)(AssignExercise);