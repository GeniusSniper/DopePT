import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../styles/home.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/tweets');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.isClinician) {
      let user = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.loginClinician(user); 
    } else {
      let user = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.loginPatient(user); 
    }
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
        <form onSubmit={this.handleSubmit}>
          <div className='login-form'>
            <br/>
              <label>Email</label>
              <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <label>Password</label>
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
            <div className='submit-button-container'>
              <input className='submit-button' type="submit" value="Submit" />
            </div>
            <div className='already-have-account'>
              <p>Don't have an account?</p>
              <Link className='link-button' to='/Signup'>Signup</Link>
            </div>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);