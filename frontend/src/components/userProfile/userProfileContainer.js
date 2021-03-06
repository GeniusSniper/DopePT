import { connect } from 'react-redux'
import UserProfile from './userprofile';

const mSTP = state => {
    const user = state.session.currentUser || state.session.user;
    let isDoctor = state.session.isClinician || (state.session.user && state.session.user.isClinician);
    let userType = isDoctor ? 'clinicians' : 'patients';
    return {
        user,
        userType
    }
}

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(UserProfile);