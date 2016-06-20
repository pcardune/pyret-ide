import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React from "react";
import Radium from "radium";
import Button from "./Button";

class Stop extends React.Component {
  render() {
    //change to this.props.running (does that mean remaking propdeclerations like in Run.js or importing them somehow or making a seperate file for them and then importing them or what?)
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

export default connect(
  
)(Radium(Stop));
