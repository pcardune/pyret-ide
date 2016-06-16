import React from "react";
import Radium from "radium";
import Button from "./Button";

//TODO
//if clicked this.setState should make running equal to true
//test and (probably) debug gif img within img

class Run extends React.Component {
  constructor(props){
    super(props);
    this.state = {running: false};
  }
  render() {
    if (this.state.running) {
      return (
        <Button kind="run" style={{color: "gray"}}><img src={this.props.gif}/>Running...</Button>
      );
    } else {
      return (
        <Button kind="run" style={{backgroundColor: "#317BCF"}}>Run</Button>
      );
    }
  }
}

Run.propTypes = {gif: React.PropTypes.string};

export default Radium(Run);
