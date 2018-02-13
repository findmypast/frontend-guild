const React = require("react");

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrementCount() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button type="button" onClick={this.incrementCount}>
          Increment
        </button>
        <button type="button" onClick={this.decrementCount}>
          Decrement
        </button>
      </div>
    );
  }
}
