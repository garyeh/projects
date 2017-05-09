import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../../reducers/selectors';
import { receiveTodos, receiveTodo, removeTodo, toggleTodo } from '../../../actions/todo_actions'


const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  receiveTodos: (todos) => dispatch(receiveTodos(todos)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  toggleTodo: (todo) => dispatch(toggleTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
