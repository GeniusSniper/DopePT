import { connect } from 'react-redux';
import { updateCalendar } from '../../actions/session_actions';
import Calendar from './calendar';

const mSTP = (state) => {
    const currentUser = state.session.currentUser || state.session.user;
    let isDoctor = state.session.isClinician || (state.session.user && state.session.user.isClinician);
    let userType = isDoctor ? 'clinicians' : 'patients';
    return {
        userType,
        currentUser,
    }
}

const mDTP = dispatch => ({
    updateCalendar: (userType, userId, data) => dispatch(updateCalendar(userType, userId, data)),
})

export default connect(mSTP, mDTP)(Calendar);