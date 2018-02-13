const React = require('react');

class Counter extends React.Component{
  constructor(props) {
// Your state
  }
// Your event handlers 

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
          <button type="button" onClick={this.decrementCount}>
            Decrement
          </button>
          <button type="button" onClick={this.incrementCount}>
            Increment
          </button>
      <div>
    )
  }
}
