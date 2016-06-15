import React from "react";
import Radium from "radium";
import {styles} from "./styles";


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
        <button style={[styles.buttons.base, styles.buttons.run.running]}>
            <img src={this.props.gif}/>
            Running...
        </button>
      );
    } else {
      return (
        <button style={[styles.buttons.base, styles.buttons.run.notRunning]}>
            Run
        </button>
      );
    }
  }
}

Run.propTypes = {gif: React.PropTypes.string};

export default Radium(Run);
