import React from 'react';
import Radium from 'radium';
import {isRunDropdownExpanded, getSource} from '../redux/selectors';
import {connect} from 'react-redux';
import {styles} from './styles';
import Button from './Button';
import {run, clearState, collapseRunDropdown} from '../redux/actionCreators';

export class RunDropdown extends React.Component {
  render() {
    if (this.props.expanded) {
      return(
        <div style={styles.buttons.run.dropdownContainer}>
          <Button style={styles.buttons.run.dropdownButtons}
                  onClick={() => {
                    this.props.onRun(this.props.source);
                    this.props.collapse();
                  }}>
            Run
          </Button>
          <Button style={styles.buttons.run.dropdownButtons}
                  onClick={() => {
                    this.props.onRun(this.props.source);
                    this.props.collapse();
                  }}>
            Typecheck & Run
          </Button>
        </div>
      );
    }
    return null;
  }
}

RunDropdown.propTypes = {
  expanded: React.PropTypes.bool,
  onRun: React.PropTypes.func,
  source: React.PropTypes.string,
  collapse: React.PropTypes.func,
};

export default connect(
  state => ({
    expanded: isRunDropdownExpanded(state),
    source: getSource(state),
  }),
  dispatch => ({
    onRun(src) {
      dispatch(clearState());
      dispatch(run(src));
    },
    collapse() {
      dispatch(collapseRunDropdown());
    }
  }))(Radium(RunDropdown));
