import React from 'react';
// import { Link } from 'react-router-dom';
import ExercisesContainer from '../exercises/exercises_container';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Main</h1>
          <div>
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