import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {  Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPageContainer from './main/mainPage_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
// import UserProfile from './userProfile/user_profile_container';
// import ExercisesContainer from './exercises/exercises_container';
// import ExerciseContainer from './exercises/exercise_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/" component={MainPageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      {/* <ProtectedRoute exact path='/:userType/exercises' component={ExercisesContainer}/> */}
      {/* <ProtectedRoute exact path='/:userType/exercises/:exerciseId' component={ExerciseContainer}/> */}
    </Switch>
  </div>
);

export default App;