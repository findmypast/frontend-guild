const React = require("react");
const _ = require("lodash");

class WishlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', wish: '', priority: 1};
  }

  handleSubmit(event){
    send(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Name:
          <input id="name" type="text" onChange={(e) => this.setState({name: e.target.value})} />
        </label>
        <label>
          Wish:
          <textarea id="wish" onChange={(e) => this.setState({wish: e.target.value})}/>
        </label>
        <label>
          Priority:
          <select id="priority"
              value={this.state.priority}
              onChange={(e) => this.setState({priority: parseInt(e.target.value) })} >
            {_.range(1,6).map((i) => <option value={i}>{i}</option>)}
          </select>
        </label>
      </form>
    );
  }
};
