import React from 'react';
import { Link } from 'react-router-dom';
import ExercisesContainer from '../exercises/exercises_container';
import UserProfileContainer from '../userProfile/user_profile_container'


class MainPage extends React.Component {

  render() {
    return (
      <div>
        <div>
          <div>
            <UserProfileContainer/>
          </div>
          <div>
            <ExercisesContainer userType={this.props.userType}/>
          </div>
          <div>
            
          </div>
        </div>
        <footer>
        </footer>
      </div>
    );
  }
}

export default MainPage;