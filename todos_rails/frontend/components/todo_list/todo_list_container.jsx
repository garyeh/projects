import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';
import * as Action from '../../actions/todo_actions'



const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: ["1"]
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(Action.receiveTodo(todo)),
  receiveTodos: (todos) => dispatch(Action.receiveTodos(todos)),
  removeTodo: (todo) => dispatch(Action.removeTodo(todo)),
  toggleTodo: (todo) => dispatch(Action.toggleTodo(todo)),
  fetchTodos: () => dispatch(Action.fetchTodos),
  createTodo: (todo) => dispatch(Action.createTodo(todo)),
  deleteTodo: (todo) => dispatch(Action.deleteTodo(todo)),
  patchTodo: (todo) => dispatch(Action.patchTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
