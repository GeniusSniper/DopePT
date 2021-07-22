import { connect } from 'react-redux';
import { createExercise } from '../../actions/exercise_actions';
import ExerciseForm from './ExerciseForm';

const mst = (state) => {
    let userId = state.session.currentUserId || state.session.user.id
    return ({
    userId,
})};

const mdt = dispatch => ({
    createExercise: (userId, exercirse) => dispatch(createExercise(userId, exercirse)),
});

export default connect(mst,mdt)(ExerciseForm);