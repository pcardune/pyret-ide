import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeREPLCode, run} from '../redux/actionCreators';
import * as selectors from '../redux/selectors';

const styles = {
  wrapper: {
    margin: 5,
    fontFamily: 'monospace',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  input: {
    backgroundColor: '#eee',
    border: 0,
    flexBasis: '100%',
  },
  inputChevron: {
    paddingRight: 10,
  },
};

export class REPLInput extends React.Component {
  render() {
    if (this.props.isLoadingRuntime) {
      return (null);
    }
    return (
      <div style={styles.wrapper}>
        <span style={styles.inputChevron}>
          {'> '}
        </span>
        <input
          style={styles.input}
          value={this.props.code}
          onChange={event => this.props.changeREPLCode(event.target.value)}
          onKeyPress={event =>
                 event.key === "Enter" && this.props.onRun(this.props.code)}
        />
      </div>
    );
  }
}

REPLInput.propTypes = {
  code: React.PropTypes.string,
  isLoadingRuntime: React.PropTypes.bool,
  changeREPLCode: React.PropTypes.func,
  onRun: React.PropTypes.func,
};

export default connect(
  state => ({
    code: selectors.getCode(state),
    isLoadingRuntime: selectors.isLoadingRuntime(state),
  }),
  dispatch => bindActionCreators(
    {
      changeREPLCode: changeREPLCode,
      onRun: run,
    }, dispatch)
)(REPLInput);
