import { RECEIVE_CURRENT_USER, 
         RECEIVE_USER_LOGOUT, 
        } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  currentUserId: undefined,
  isClinician: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state, 
        isAuthenticated: !!action.user,
        currentUserId: action.user.id,
        isClinician: action.user.isClinician,
        currentUser: action.user
      };
    case RECEIVE_USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
}