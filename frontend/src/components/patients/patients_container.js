import { connect } from 'react-redux'
import Patients from './patients';

const mSTP = state => {
    debugger
    const currentUser = state.users[state.session.currentUserId]
    const patients = Object.values(state.users);
    delete patients[state.session.currentUserId]
    return {
        currentUser,
        patients,
    }
}

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(Patients);