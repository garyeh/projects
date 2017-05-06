import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { names: props.names, inputVal: "" };
  }

  updateInputVal (e) {
    this.setState({ inputVal: e.target.value });
  }

  clickUpdate(e) {
    this.setState({ inputVal: e.target.innerText })
  }

  render () {
    let nameTags = this.state.names.map((name) => (
      <li onClick={this.clickUpdate.bind(this)} key={name}>{name}</li>
    ));

    return (
      <div>
        <input onInput={this.updateInputVal.bind(this)} type="text" value={this.state.inputVal}></input>
        <ul>
          {nameTags}
        </ul>
      </div>
    );
  }
}

export default Autocomplete;
