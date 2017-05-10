import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          { this.props.todos.map(todo => <TodoListItem
            removeTodo={ this.props.removeTodo }
            toggleTodo={ this.props.toggleTodo }
            key={todo.id} todo={todo}/>) }
        </ul>
        <TodoForm submit={ this.props.receiveTodo }/>
      </div>
    );
  }
}

export default TodoList;
