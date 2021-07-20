import { connect } from 'react-redux';
import { receiveAllExercises } from '../../actions/exercise_actions';
import Exercises from './exercises';

const mst = state => ({
    allExercises: Object.values(state.exercises)
});

const mdt = dispatch => ({
    requestAllExercises: () => dispatch(receiveAllExercises()),
});

export default connect(mst,mdt)(Exercises);