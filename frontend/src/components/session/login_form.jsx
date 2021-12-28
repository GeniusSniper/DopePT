import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../styles/home.css'
import Background from '../../styles/images/splash-image.jpg'

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
    this.handleDemoUser = this.handleDemoUser.bind(this);
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
        .then(
          () => this.props.history.push('/main')
        );
    } else {
      this.props.loginPatient(user)
        .then(
          () => this.props.history.push('/main')
        );
    }
  }

  handleDemoUser(e) {
    e.preventDefault();
    let patient = {
      handle: 'Demo Patient',
      email: 'patient@email.com',
      password: '123456',
      isClinician: false,
    };
    
    let clinician = {
      handle: 'Demo Clinician',
      email: 'clinician@email.com',
      password: '123456',
      isClinician: true,
    };

    if (this.title().props.children[1] === 'Login for Clincians') {
      this.props.loginClinician(clinician)
      .then(
        () => this.props.history.push('/main')
      );
    } else {
      this.props.loginPatient(patient)
      .then(
        () => this.props.history.push('/main')
      );
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

  demoLoginButton() {
    return(
      <button className='demo-button' 
        onClick={this.handleDemoUser}>
          Demo 
          {this.title().props.children[1] === 'Login for Clincians' ?
           ' Clinician ' : 
           ' Patient '} 
           Login
        </button>
    )
  }

  render() {
    return (
      <div>
        <img className='background' src={Background} alt='background'/>
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
                {this.demoLoginButton()}
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
      </div>
    );
  }
}

export default withRouter(LoginForm);