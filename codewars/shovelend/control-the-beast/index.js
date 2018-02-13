import React, { Component } from "react";

class Beast extends Component {

  state = {
    beastName: this.props.beastName
  }
  
  handleSubmit(event){
    await fetch('https://beast.controlled.com/' + this.state.beastName);
  }
  
  render(){
    return(
      <label>
        Beast Name:
        <input type="text" 
        value = {this.state.beastName} 
        onChange = {e => this.setState({ bestName: event.target.value })} />
      </label>
      <input type="submit" value="Control" />
    );
  }

}