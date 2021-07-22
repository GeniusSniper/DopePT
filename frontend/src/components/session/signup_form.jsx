import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../styles/home.css'
import Background from '../../styles/images/background.jpg'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {},
      isClinician: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };
    if (this.state.isClinician) {
      this.props.signupClinician(user, this.props.history)
    } else {
      this.props.signupPatient(user, this.props.history)
    }

    // this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <img className='background' src={Background} alt="" />
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <br/>
              <label>Email
                <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="example@email.com"
              />
              </label>
            <br/>
            <label>Handle
              <br/>
              <input type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Johnny"
              />
              </label>
            <br/>
            <label>Password
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              </label>
            <br/>
            <label>Confirm Password
              <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
              </label>
            <br/>
            <label>Are you a Clinician? 
              <br/>
              <input type="checkbox" onClick={() => this.setState({isClinician: !this.state.isClinician})}/>
            </label>
            <br/>
            <div className='submit-button-container'>
              <input className='submit-button' type="submit" value="Submit" />
            </div>
            <div className='already-have-account'>
              <p>Already have an account?</p>
              <Link className='link-button' to='/login'>Login</Link>
            </div>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);