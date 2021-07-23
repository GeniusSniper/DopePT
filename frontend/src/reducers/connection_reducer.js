import { RECEIVE_CONNECTION } from "../actions/session_actions";


const connectionReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
    case RECEIVE_CONNECTION:
        return action.payload
    default:
        return [];
    }
};

export default connectionReducer;