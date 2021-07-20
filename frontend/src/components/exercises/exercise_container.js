import { connect } from 'react-redux';
import { requestExercise } from '../../actions/exercise_actions';
import Exercise from './exercise';

const mst = state => ({
    exercise: state.exercises[state.match.params.exerciseId]
});

const mdt = dispatch => ({
    requestExercise: (userType, exerciseId) => dispatch(requestExercise(userType, exerciseId))
});

export default connect(mst,mdt)(Exercise);