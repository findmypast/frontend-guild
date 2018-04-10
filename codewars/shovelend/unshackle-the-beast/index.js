const React = require("react");

class BeastForm extends React.Component {  

  handleSubmit(event){
    unshackle(this.beastToRelease);
    event.preventDefault();
  }

  render() {
    return (
      <form id="beastForm" onSubmit={(e) => this.handleSubmit(e)}>
        <input id="beastToRelease" ref={(beastToRelease) => this.beastToRelease = beastToRelease} type="text" />
        <button id="submit"/>
      </form>
    );
  }
}
