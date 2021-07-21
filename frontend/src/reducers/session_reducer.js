import { RECEIVE_CURRENT_USER, 
         RECEIVE_USER_LOGOUT, 
        } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  currentUserId: undefined
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.user,
        currentUserId: action.user.id
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        currentUserId: undefined
      };
    default:
      return state;
  }
}