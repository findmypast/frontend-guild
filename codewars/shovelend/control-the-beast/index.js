const React = require("react");

class Beast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }

  render() {
    return (
          <input
            id="controlledName"
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
    );
  }
}

Beast.defaultProps = {
  name: "Yeti"
};