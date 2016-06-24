import React from "react";
import Radium from "radium";
import Button from "./Button";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {run} from '../redux/actionCreators';
import {styles} from './styles';

export class Run extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    if (this.props.running) {
      return (
        <Button kind="run" style={{color: "gray", paddingTop: 12}}><img style={styles.gif} src={this.props.gif}/>Running...</Button>
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
};

export default connect(
  state => ({
    running: state.running
  }),
  dispatch => bindActionCreators( {
    onRun: run,
  }, dispatch)
)(Radium(Run));
