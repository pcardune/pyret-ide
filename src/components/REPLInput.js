import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeREPLCode, run} from '../redux/actionCreators';
import * as selectors from '../redux/selectors';

export default class REPLInput extends React.Component {
  render() {
    if (this.props.isLoadingRuntime) {
      return (null);
    }
    return (
      <div style={{margin: 5, fontFamily: 'monospace'}}>
        {'> '}
        <input style={{width: "90%", border: 0}}
               value={this.props.code}
               onChange={event => this.props.changeREPLCode(event.target.value)}
               onKeyPress={event => event.key === "Enter" && this.props.onRun(this.props.code)} />
      </div>
    );
  }
}

REPLInput.propTypes = {
  REPLInput: React.PropTypes.string,
  code: React.PropTypes.string,
  isLoadingRuntime: React.PropTypes.bool,
  changeREPLCode: React.PropTypes.func,
  onRun: React.PropTypes.func,
};

export default connect(
  state => ({
    code: state.REPL.code,
    isLoadingRuntime: selectors.isLoadingRuntime(state),
  }),
  dispatch => bindActionCreators(
    {
      changeREPLCode: changeREPLCode,
      onRun: run,
    }, dispatch)
)(REPLInput);
