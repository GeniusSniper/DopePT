import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../styles/home.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isClinician: false,
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
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
      password: this.state.password,
    };
    if (this.state.isClinician) {
      this.props.loginClinician(user)
        // .then(
        //   () => this.props.history.push('/')
        // );
    } else {
      this.props.loginPatient(user)
        // .then(
        //   () => this.props.history.push('/')
        // );
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
    )
  }

  title() {
    return (
      <h3 className='login-text'> {
        this.state.isClinician ? 
          'Login for Clincians' :
          'Login for Patients'
        }
      </h3>
    );
  }

  formSwap() {
      return(
        <div onClick={() => {
          this.setState({
            isClinician: !this.state.isClinician
          })
        }}>
          Login as {this.state.isClinician ?
            'Patient' :
            'Clinician'
          }
        </div>
      )
  }

  render() {
    return (
      <div className="login-form-container">
        <div className='login-form'>
        <form onSubmit={this.handleSubmit}>
          {this.title()}
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
            {this.renderErrors()}
        </form>
        <div className='form-swap-button'>
          {this.formSwap()}
        </div>
        <div className='already-have-account'>
          <p>Don't have an account?</p>
          <Link className='link-button' to='/Signup'>Signup</Link>
        </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);