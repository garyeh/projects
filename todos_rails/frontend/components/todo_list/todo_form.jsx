import React from 'react';

class TodoForm extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.submitToDo = this.submitToDo.bind(this);
  }

  linkState(key) {
    return (event => this.setState({ [key]: event.currentTarget.value}) );
  }

  submitToDo() {
    return (event => {
      event.preventDefault();
      this.props.createTodo(this.state).then(
        () => this.setState({ title: "", body: "" })
      );
    });
  }

  render() {
    return (
      <div>
        <p>{ this.props.errors }</p>
        <p>Title</p>
        <input onChange={this.linkState('title')}
          value={this.state.title}></input>
        <p>Body</p>
        <input onChange={this.linkState('body')}
          value={this.state.body}></input>
        <br/>
        <button onClick={ this.submitToDo() }>Add To Do Item</button>
      </div>
    );
  }

}

export default TodoForm;
