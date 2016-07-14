import React from 'react';
import Radium from 'radium';
import Button from './Button';
import Spinner from './Spinner';
import * as selectors from '../redux/selectors';
import {styles} from './styles';
import {connect} from 'react-redux';
import {run, clear} from '../redux/actionCreators';

export class Run extends React.Component {
  render() {
    if (this.props.isRunning && this.props.hasLoadedRuntime) {
      return (
        <Button style={styles.buttons.run.running}>
          <Spinner style={styles.spinners.toolbar}/>
          Running...
        </Button>
      );
    } else {
      return (
        <Button style={styles.buttons.run.waiting}
                onClick={() => this.props.onRun(this.props.source)}>
          Run
        </Button>
      );
    }
  }
}

Run.propTypes = {
  isRunning: React.PropTypes.bool,
  onRun: React.PropTypes.func,
  source: React.PropTypes.string,
  hasLoadedRuntime: React.PropTypes.bool,
};

export default connect(
  state => ({
    source: selectors.getSource(state),
    isRunning: selectors.isRunning(state),
    hasLoadedRuntime: selectors.hasLoadedRuntime(state),
  }),
  dispatch => ({
    onRun(src) {
      dispatch(clear());
      dispatch(run(src));
    }
  })
)(Radium(Run));
