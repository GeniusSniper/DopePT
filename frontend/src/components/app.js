import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ExercisesContainer from './exercises/exercises_container';
import ExerciseContainer from './exercises/exercise_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path='/:userType/exercises' component={ExercisesContainer}/>
      <ProtectedRoute exact path='/:userType/exercises/:exerciseId' component={ExerciseContainer}/>
    </Switch>
  </div>
);

export default App;