import { connect } from 'react-redux';
import { loginClinician, loginPatient } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginClinician: user => dispatch(loginClinician(user)),
    loginPatient: user => dispatch(loginPatient(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);