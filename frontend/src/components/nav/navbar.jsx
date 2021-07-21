import React from 'react';
// import { Link } from 'react-router-dom';
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
      } 
  }

  render() {
      return (
        <div>
            <div className='navbar-container'>
              <h1 className='logo'>DOPE PT</h1>
                { this.getLinks() }
            </div>
        </div>
      );
  }
}

export default NavBar;