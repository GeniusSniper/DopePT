import { connect } from 'react-redux'
import Patients from './patients';

const mSTP = state => {
    const currentUser = state.users[state.session.currentUserId]
    const patients = state.users;
    delete patients[state.session.currentUserId]
    debugger
    return {
        currentUser,
        patients,
    }
}

const mDTP = dispatch => {

}

export default connect(mSTP, mDTP)(Patients);