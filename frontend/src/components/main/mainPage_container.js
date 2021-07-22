import { connect } from 'react-redux';
import MainPage from './main_page';

const mapStateToProps = state => {
    
    let isDoctor = state.session.isClinician || (state.session.user && state.session.user.isClinician);
    let userType = isDoctor ? 'clinicians' : 'patients';
    return ({
        userType
})};

const mdt = dispatch => ({

});

export default connect( mapStateToProps, mdt)(MainPage);