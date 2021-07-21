import { connect } from 'react-redux';
import { signupClinician, signupPatient } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupClinician: user => dispatch(signupClinician(user)),
    signupPatient: user => dispatch(signupPatient(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);