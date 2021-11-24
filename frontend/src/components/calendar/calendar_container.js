import { connect } from 'react-redux'
import Calendar from './calendar'

const mSTP = (state) => {
    const currentUser = state.session.currentUser || state.session.user;
    return {
        currentUser
    }
}

const mDTP = dispatch => ({
})

export default connect(mSTP, mDTP)(Calendar);