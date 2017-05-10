import React from 'react';

class TodoListItem extends React.Component {
  deleteTodo() {
    return (event => {
      event.preventDefault();
      this.props.removeTodo(this.props.todo);
    });
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  toggleDone() {
    return (event => {
      this.props.toggleTodo(this.props.todo);
    });
  }

  render() {
    const todo = this.props.todo;
    const done = todo.done === true ? 'Undo' : 'Done';
    return (
      <li>
        {todo.title}
        <button onClick={ this.deleteTodo() }>Remove</button>
        <button onClick={ this.toggleDone() }>{done}</button>
      </li>
    );
  }
}

export default TodoListItem;
