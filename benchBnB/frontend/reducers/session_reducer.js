import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";


const defaultState = Object.freeze({
  currentUser: null,
  errors: []
});

export const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.user;
      return merge({}, defaultState, { currentUser });
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, defaultState, { errors });
    default:
      return state;
  }
};

export default SessionReducer;
