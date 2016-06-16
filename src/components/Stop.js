import React from "react";
import Radium from "radium";
import Button from "./Button";

class Stop extends React.Component {
  render() {
    if (this.state.running) {
      return (
        <Button kind="stop" style={{backgroundColor: "#FF0000"}}>Stop</Button>
      );
    } else {
      return (
        <Button kind="stop">Stop</Button>
      );
    }
  }
}

export default Radium(Stop);
