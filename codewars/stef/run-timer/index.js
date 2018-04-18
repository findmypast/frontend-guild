const React = require("react");

class RunTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};   
  }
  
  timer() {
   this.setState({'count': this.state.count+1} );
  }
  
  componentWillMount() {
    let timerId = setInterval(this.timer, 1000);
    this.setState({timerId: timerId});
  }
  
  async componentDidMount(){
    let response = await fetch(
      '/timed-stats.json'
    );
    this.setState({timedStats: response});
  }
  
  componentWillUnmount(){
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <div>Timer {this.state.count} </div>
    );
  }
} 