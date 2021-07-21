import { connect } from 'react-redux';
import { requestAllExercises } from '../../actions/exercise_actions';
import Exercises from './exercises';

const mst = state => ({
    allExercises: Object.values(state.exercises)
});

const mdt = dispatch => ({
    requestAllExercises: (userType) => dispatch(requestAllExercises(userType)),
});

export default connect(mst,mdt)(Exercises);