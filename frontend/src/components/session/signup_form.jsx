import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../styles/home.css';
import multiavatar from '@multiavatar/multiavatar';

// import { createAvatar } from '@dicebear/avatars';
// import * as style from '@dicebear/avatars-male-sprites';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      phone: '',
      errors: {},
      isClinician: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.updateAvatar = this.updateAvatar.bind(this);
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
      password2: this.state.password2,
      phone: this.state.phone,
    };
    if (this.state.isClinician) {
      this.props.signupClinician(user, this.props.history)
    } else {
      this.props.signupPatient(user, this.props.history)
    }

    // this.props.signup(user, this.props.history); 
  }

  updateAvatar(e){
    e.preventDefault();
    let avatarClass = document.querySelector('.avatar');
    let avatar = multiavatar(e.currentTarget.value);
    avatarClass.innerHTML = avatar;
    this.setState({
      handle: e.currentTarget.value
    });
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

    // let svg = createAvatar(style, {
    //   seed: 'custom-seed',
    //   // ... and other options
    // });

    // console.log(svg);
    return (
      <div className="login-form-container">
        {/* <div className='background'></div> */}
        {/* <img className='background' src={Background} alt="" /> */}
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <div className='avatar'></div>
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
                onChange={this.updateAvatar}
                placeholder="Johnny"
              />
              </label>
            <br/>
            <label>Phone Number
              <br/>
              <input type="tel"
                value={this.state.phone}
                onChange={this.update('phone')}
                placeholder='000-000-0000' 
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required
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