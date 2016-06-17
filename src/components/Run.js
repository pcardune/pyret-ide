import React from "react";
import Radium from "radium";
import Button from "./Button";
import {connect} from 'react-redux';
import {run, stop} from '../redux/actionCreators';

//TODO
//debug gif img within img tag
class Run extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    if (this.props.running) {
      return (
        <Button kind="run" onClick={this.props.onStop} style={{color: "gray"}}><img src={this.props.gif}/>Running...</Button>
      );
    } else {
      return (
        <Button kind="run" onClick={this.props.onRun} style={{backgroundColor: "#317BCF"}}>Run</Button>
      );
    }
  }
}

Run.propTypes = {
  gif: React.PropTypes.string,
  running: React.PropTypes.bool,
  onRun: React.PropTypes.func,
  onStop: React.PropTypes.func
};

export default connect(
  function mapStateToProps(state) {
    return {
      running: state.running
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      onRun: function() {
        dispatch(run());
      },
      onStop: function() {
        dispatch(stop());
      }
    };
  }
)(Radium(Run));
