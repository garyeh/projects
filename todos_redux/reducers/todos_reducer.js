import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/todo_actions";

const todosReducer = (state = {}, action) => {
  let newState = {};
  switch(action.type) {
    case RECEIVE_TODOS:
      for (var i = 0; i < action.todos.length; i++) {
        const key = action.todos[i].id;
        newState[`${key}`] = action.todos[i];
      }
      return Object.assign({}, state, newState);
    case RECEIVE_TODO:
      newState[`${action.todo.id}`] = action.todo;
      return Object.assign({}, state, newState);
    case REMOVE_TODO:
      newState = Object.assign({}, state);
      delete newState[`${action.todo.id}`];
      return newState;
    case TOGGLE_TODO:
      newState = Object.assign({}, state);
      const obj = newState[`${action.todo.id}`];
      obj.done = obj.done === true ? false : true;
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
