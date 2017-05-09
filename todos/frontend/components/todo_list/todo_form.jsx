import React from 'react';

class TodoForm extends React.Component {

  constructor() {
    super();
    this.state = {
      id: this.uniqueId(),
      title: "",
      body: "",
      done: false
    };
    this.submitToDo = this.submitToDo.bind(this);
  }

  uniqueId() {
    return new Date().getTime();
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  submitToDo() {
    return (event => {
      event.preventDefault();
      this.setState({id: this.uniqueId()}, () => {
        this.props.submit(this.state);
      });
    });
  }

  render() {
    return (
      <div>
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
