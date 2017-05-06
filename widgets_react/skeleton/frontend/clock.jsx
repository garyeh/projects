import React from 'react';

class Clock extends React.Component {
  constructor () {
    super();
    this.state = { time: new Date() };
  }

  tick () {
    this.setState({ time: new Date() });
  }

  componentDidMount() {
    this.intervalHandle = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
    this.intervalHandle = 0;
  }

  render() {
    return(
      <section className="clock">
        <label className="clockLabel">
          Clock
        </label>
        <div className="contents">
          <ul>
            <li>
              <p>
                Time:
              </p>
              <p>
                {this.state.time.toLocaleTimeString()}
              </p>
            </li>
            <li>
              <p>
                Date:
              </p>
              <p>
                {this.state.time.toLocaleDateString()}
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Clock;
