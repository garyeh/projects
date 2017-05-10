import * as APIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
});

export const toggleTodo = (todo) => ({
  type: TOGGLE_TODO,
  todo
});

export const fetchTodos = (dispatch) => {
  APIUtil.fetchTodos().then(resp => dispatch(receiveTodos(resp)));
};

export const createTodo = todo => dispatch => {
  return APIUtil.createTodo(todo)
    .then(resp => {
      dispatch(receiveTodo(resp))
      
    },
      err => dispatch(receiveErrors(err.responseJSON)));
};

export const deleteTodo = todo => dispatch => {
  APIUtil.deleteTodo(todo).then(resp => dispatch(removeTodo(resp)));
}

export const patchTodo = todo => dispatch => {
  APIUtil.patchTodo(todo).then(resp => dispatch(toggleTodo(resp)));
}
