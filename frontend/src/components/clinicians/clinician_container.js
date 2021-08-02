import { connect } from 'react-redux'
import { requestConnection } from '../../actions/session_actions';
import Clinician from './clinician'

const mSTP = (state) => {
    
    const currentUser = state.session.currentUser || state.session.user;
    // let isDoctor = state.session.isClinician || (state.session.user && state.session.user.isClinician);
    // let userType = isDoctor ? 'clinicians' : 'patients';
    const clinician = state.connection;
    return {
        clinician,
        // userType,
        currentUser
    }
}

const mDTP = dispatch => ({
    requestConnection: (userType, userId) => dispatch(requestConnection(userType, userId))
})

export default connect(mSTP, mDTP)(Clinician)