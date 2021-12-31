import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <button className='logout-button' onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
          <div className='login-links'>
            <Link className='logout-button' to='/login'>
              Login
            </Link>
            <Link className='logout-button' to='/signup'>
              Signup
            </Link>
          </div>
        )
      }
  }

  render() {
      return (
        <div className='navbar-container'>
          <div className='navbar'>
            <h1 className='logo'>DOPE PT</h1>
            <div className='logout-button-container'>
              { this.getLinks() }
            </div>
          </div>
        </div>
      );
  }
}

export default NavBar;