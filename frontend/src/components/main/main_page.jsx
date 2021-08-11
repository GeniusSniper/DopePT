import React from 'react';
// import { Link } from 'react-router-dom';
import UserProfileContainer from '../userProfile/user_profile_container'


class MainPage extends React.Component {

  render() {
    return (
      <div>
        <UserProfileContainer/>
      </div>
    );
  }
}

export default MainPage;