import { connect } from 'react-redux';
import { requestConnection } from '../../actions/session_actions';
import Patients from './patients';

const mSTP = state => {
    const currentUser = state.session.currentUser || state.session.user;
    // const currentUser = state.users[state.session.currentUserId]
    let isDoctor = state.session.isClinician || (state.session.user && state.session.user.isClinician);
    let userType = isDoctor ? 'clinicians' : 'patients';
    // const patients = Object.values(state.users);
    // delete patients[state.session.currentUserId]
    const patients = Object.values(state.connection);
    return {
        currentUser,
        patients,
        userType,
    }
}

const mDTP = dispatch => ({
    requestConnection: (userType, userId) => dispatch(requestConnection(userType, userId)),
})

export default connect(mSTP, mDTP)(Patients);