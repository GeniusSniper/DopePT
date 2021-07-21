import React from 'react';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Main</h1>
        <Link to={`${this.props.userType}/exercises`}>My Exercises</Link>
        <footer>
        </footer>
      </div>
    );
  }
}

export default MainPage;