import React from "react";
import Radium from "radium";
import Button from "./Button";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {run} from '../redux/actionCreators';
import {styles} from './styles';

export class Run extends React.Component {
  render() {
    if (this.props.running) {
      return (
        <Button kind="run" style={{color: "gray", paddingTop: 12}}>
          <img style={styles.gif} src={this.props.gif}/>
          Running...
        </Button>
      );
    } else {
      return (
        <Button kind="run"
                onClick={() => this.props.onRun(this.props.source)}
                style={{backgroundColor: "#317BCF"}}>
          Run
        </Button>
      );
    }
  }
}

Run.propTypes = {
  gif: React.PropTypes.string,
  running: React.PropTypes.bool,
  onRun: React.PropTypes.func,
  source: React.PropTypes.string,
};

export default connect(
  state => ({
    running: ['parsing', 'compiling','executing'].includes(state.runCode.stage),
    source: state.editor.source,
  }),
  dispatch => bindActionCreators( {
    onRun: run,
  }, dispatch)
)(Radium(Run));
