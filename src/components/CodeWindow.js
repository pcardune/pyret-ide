import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Codemirror from 'react-codemirror';
import {changeSource} from '../redux/actionCreators';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

require('./CodeWindow.css');

class CodeWindow extends React.Component {
  render() {
    var options = {
      lineNumbers: true,
    };
    return (
      <Codemirror className="PyretIDE-CodeWindow"
                  value={this.props.source}
                  onChange={this.props.changeSource}
                  options={options} />
    );
  }
}
CodeWindow.propTypes = {
  source: React.PropTypes.string,
  changeSource: React.PropTypes.func,
};

export default connect(
  state => ({
    source: state.editor.source,
  }),
  dispatch => bindActionCreators(
    {
      changeSource: changeSource
    },
    dispatch
  )
)(CodeWindow);
