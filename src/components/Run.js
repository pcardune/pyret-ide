import React from 'react';
import Radium from 'radium';
import Button from './Button';
import Spinner from './Spinner';
import * as selectors from '../redux/selectors';
import {styles} from './styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {run} from '../redux/actionCreators';

export class Run extends React.Component {
  render() {
    if (this.props.isRunning && this.props.hasLoadedRuntime) {
      return (
        <Button kind="run" style={{color: "gray", paddingTop: 12}}>
          <Spinner style={styles.spinners.toolbar}/>
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
  isRunning: React.PropTypes.bool,
  onRun: React.PropTypes.func,
  source: React.PropTypes.string,
  hasLoadedRuntime: React.PropTypes.bool,
};

export default connect(
  state => ({
    source: state.editor.source,
    isRunning: selectors.isRunning(state),
    hasLoadedRuntime: selectors.hasLoadedRuntime(state),
  }),
  dispatch => bindActionCreators( {
    onRun: run,
  }, dispatch)
)(Radium(Run));
