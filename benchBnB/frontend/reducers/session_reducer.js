import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";


const defaultState = {
  currentUser: {
    username: "",
    id: undefined
  },
  errors: []
};

export const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      action.errors = [];
      return merge({}, state, action.user);
    case RECEIVE_ERRORS:
      return ""; // fix this
    default:
      return state;
  }
};
