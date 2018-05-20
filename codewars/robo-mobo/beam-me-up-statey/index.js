const React = require("react");

export class Universe extends React.Component {
  constructor() {
    super();
    this.state = {
      intransitToPlanet: null,
      intransitToStarShip: null
    };

    this.transportToStarship = this.transportToStarship.bind(this);
  }

  transportToPlanet(person) {
    this.setState({ intransitToPlanet: person });
  }

  transportToStarship(person) {
    this.setState({ intransitToStarShip: person });
  }

  render() {
    return (
      <div className="Universe">
        <h1>Universe</h1>
        <Starship
          person={this.state.intransitToStarShip}
          transport={this.transportToPlanet}
        />
        <Planet
          person={this.state.intransitToPlanet}
          transport={this.transportToStarship}
        />
      </div>
    );
  }
}

export class Starship extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inhabitants: ["Lauras", "Tobin", "Robot"] };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.person !== this.props.person) {
      this.setState({
        inhabitants: [...this.state.inhabitants, nextProps.person]
      });
    }
  }

  transport(person) {
    return () => {
      this.setState({
        inhabitants: this.state.inhabitants.filter(name => person != name)
      });
      this.props.transport(person);
    };
  }

  render() {
    return (
      <div className="Starship">
        <h3>Starship Finderprise</h3>
        {this.state.inhabitants.map((name, index) => {
          return (
            <button key={index} onClick={this.transport(name)}>
              Transport {name}
            </button>
          );
        })}
      </div>
    );
  }
}

export class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inhabitants: ["Attilus", "Dennix", "Mobius"] };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.person !== this.props.person) {
      this.setState({
        inhabitants: [...this.state.inhabitants, nextProps.person]
      });
    }
  }

  transport(person) {
    return () => {
      this.setState({
        inhabitants: this.state.inhabitants.filter(name => person != name)
      });
      this.props.transport(person);
    };
  }

  render() {
    return (
      <div className="Planet">
        <h3>Planet Earth</h3>
        {this.state.inhabitants.map((name, index) => {
          return (
            <button key={index} onClick={this.transport(name)}>
              Transport {name}
            </button>
          );
        })}
      </div>
    );
  }
}
