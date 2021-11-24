import * as APIUtil from "../util/session_api_util";
// import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_CONNECTION = "RECEIVE_CONNECTION";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
  exercises: user.exercises,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT,
});

export const receiveConnection = (payload) => ({
  type: RECEIVE_CONNECTION,
  payload,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const requestConnection = (userType, userId) => (dispatch) =>
  APIUtil.getConnection(userType, userId).then((payload) =>
    dispatch(receiveConnection(payload.data))
  );

export const updateCalendar = (userType, userId, data) => (dispatch) =>
  APIUtil.updateCalendar(userType, userId, data).then((res) =>
    dispatch(receiveCurrentUser(res.data.user))
  );

export const signupClinician = (user) => (dispatch) =>
  APIUtil.signupClinician(user).then(
    (res) => {
      const { token, user } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      dispatch(receiveCurrentUser(user));
    },
    (err) => {
      dispatch(receiveErrors(err.response.data));
    }
  );

export const signupPatient = (user) => (dispatch) =>
  APIUtil.signupPatient(user).then(
    (res) => {
      const { token, user } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      dispatch(receiveCurrentUser(user));
    },
    (err) => {
      dispatch(receiveErrors(err.response.data));
    }
  );

export const loginClinician = (user) => (dispatch) =>
  APIUtil.loginClinician(user).then(
    (res) => {
      const { token, user } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      dispatch(receiveCurrentUser(user));
    },
    (err) => {
      dispatch(receiveErrors(err.response.data));
    }
  );

export const loginPatient = (user) => (dispatch) =>
  APIUtil.loginPatient(user).then(
    (res) => {
      const { token, user } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      dispatch(receiveCurrentUser(user));
    },
    (err) => {
      dispatch(receiveErrors(err.response.data));
    }
  );

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  APIUtil.setAuthToken(false);
  dispatch(logoutUser());
};
