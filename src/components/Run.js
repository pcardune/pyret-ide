import React from 'react';
import Radium from 'radium';
import Button from './Button';
import Spinner from './Spinner';
import * as constants from '../redux/constants';
import {styles} from './styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {run} from '../redux/actionCreators';

export class Run extends React.Component {
  render() {
    if (this.props.running && this.props.hasLoadedRuntime) {
      return (
        <Button kind="run" style={{color: "gray", paddingTop: 12}}>
          <Spinner style={styles.spinners.toolbar}>
          </Spinner>
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
  hasLoadedRuntime: React.PropTypes.bool,
};

export default connect(
  state => ({
    running: Object.values(constants.runtimeStages).includes(state.runCode.stage),
    source: state.editor.source,
    hasLoadedRuntime: state.loadApi.stage === constants.LoadApiStages.FINISHED,
  }),
  dispatch => bindActionCreators( {
    onRun: run,
  }, dispatch)
)(Radium(Run));
