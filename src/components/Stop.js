import React from "react";
import Radium from "radium";
import {styles} from "./styles";

class Stop extends React.Component {
  render() {
    if (this.state.running) {
      return (
        <button style={[styles.buttons.base, styles.buttons.stop.running]}>
            <img src={this.props.gif}/>
            Stop
        </button>
      );
    } else {
      return (
        <button style={[styles.buttons.base, styles.buttons.stop.notRunning]}>
            Stop
        </button>
      );
    }
  }
}

export default Radium(Stop);
