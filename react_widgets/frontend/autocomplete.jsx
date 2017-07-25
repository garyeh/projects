import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "" };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ inputVal: e.currentTarget.value });
  }

  clickUpdate(e) {
    this.setState({ inputVal: e.currentTarget.innerText })
  }

  render() {
    let nameTags = this.props.names.map((name) => (
      <li onClick={this.clickUpdate.bind(this)} key={name}>{name}</li>
    ));

    return (
      <div>
        <input onInput={this.handleInput} type="text" value={this.state.inputVal}></input>
        <ul>
          {nameTags}
        </ul>
      </div>
    );
  }
}

export default Autocomplete;
