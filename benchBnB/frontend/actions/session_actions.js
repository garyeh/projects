export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as SessionUtil from '../util/session_api_util';

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const signup = (user) => dispatch => {
  return SessionUtil.signup(user)
    .then(res => dispatch(receiveCurrentUser(res)),
    error => dispatch(receiveErrors(error.responseJSON)));
};

export const login = (user) => dispatch => {
  return SessionUtil.login(user)
    .then(res => dispatch(receiveCurrentUser(res)),
    error => dispatch(receiveErrors(error.responseJSON)));
};

export const logout = () => dispatch => {
  return SessionUtil.logout()
    .then(res => dispatch(receiveCurrentUser(null)));
};
