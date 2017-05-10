import * as APIUtil from '../util/todo_api_util';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  // callback: () => { clearErrors() },
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
