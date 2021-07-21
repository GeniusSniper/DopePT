import { connect } from 'react-redux'
import userProfile from './user_profile';

const mSTP = state => {
    const user = state.session.currentUser || state.session.user
    return {
        user
    }
}

const mDTP = dispatch => {

}

export default connect(mSTP, mDTP)(userProfile);