import React from 'react';
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Footer from './footer';

import MainPageContainer from './main/mainPage_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Splash from './splash'
// import UserProfile from './userProfile/user_profile_container';
// import ExercisesContainer from './exercises/exercises_container';
// import ExerciseContainer from './exercises/exercise_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path='/' component={Splash}/>
      <ProtectedRoute exact path="/main" component={MainPageContainer} />
      {/* <ProtectedRoute exact path='/:userType/exercises' component={ExercisesContainer}/> */}
      {/* <ProtectedRoute exact path='/:userType/exercises/:exerciseId' component={ExerciseContainer}/> */}
    </Switch>
    <Footer />
  </div>
);

export default App;