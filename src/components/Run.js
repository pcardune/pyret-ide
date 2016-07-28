import React from 'react';
import Radium from 'radium';
import Button from './Button';
import Spinner from './Spinner';
import * as selectors from '../redux/selectors';
import {styles} from './styles';
import {connect} from 'react-redux';
import RunDropdown from './RunDropdown';
import ClickOutside from 'react-click-outside';
import {run,
        clearState,
        expandRunDropdown,
        collapseRunDropdown,
} from '../redux/actionCreators';

export class Run extends React.Component {
  handleClickOutside() {
    if (this.props.expanded) {
      this.props.collapse();
    }
  }
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
        <div>
          <div style={styles.buttons.run.buttonContainer}>
            <Button style={styles.buttons.run.waiting}
                    onClick={() => this.props.onRun(this.props.source)}>
              Run
            </Button>
            <Button style={styles.buttons.run.arrowButton}
                    onClick={() => {
                      this.props.expanded ? this.props.collapse() : this.props.expand();
                    }}>
              ↴
            </Button>
          </div>
          <RunDropdown/>
        </div>
      );
    }
  }
}

Run.propTypes = {
  isRunning: React.PropTypes.bool,
  onRun: React.PropTypes.func,
  source: React.PropTypes.string,
  hasLoadedRuntime: React.PropTypes.bool,
  expanded: React.PropTypes.bool,
  expand: React.PropTypes.func,
  collapse: React.PropTypes.func,
};

export default connect(
  state => ({
    expanded: selectors.isRunDropdownExpanded(state),
    source: selectors.getSource(state),
    isRunning: selectors.isRunning(state),
    hasLoadedRuntime: selectors.hasLoadedRuntime(state),
  }),
  dispatch => ({
    onRun(src) {
      dispatch(clearState());
      dispatch(run(src));
    },
    expand() {
      dispatch(expandRunDropdown());
    },
    collapse() {
      dispatch(collapseRunDropdown());
    }
  }))(ClickOutside(Radium(Run)));
