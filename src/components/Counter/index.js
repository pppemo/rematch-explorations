import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    const { increment, incrementAsync, reset, count, isLoading } = this.props
    return (
      <div className="App">
        <header className="App-header">
          {isLoading && <b>Loading...</b>}
          Count: {count}
          <button onClick={increment}>Increment</button>
          <button onClick={incrementAsync}>Increment async</button>
          <button onClick={reset}>Reset</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
    isLoading: state.loading.effects.counter.incrementAsync
  }
};

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch.counter.increment(1),
  incrementAsync: () => dispatch.counter.incrementAsync(1),
  reset: dispatch.counter.reset
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);