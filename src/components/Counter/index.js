import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from "./../../logo.svg";

class Counter extends Component {
  render() {
    const { increment, reset, count } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          Count: {count}
          <button onClick={increment}>Increment</button>
          <button onClick={reset}>Reset</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter.count
  }
};

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch.counter.increment(1),
  reset: dispatch.counter.reset
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);