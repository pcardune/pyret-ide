import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Codemirror from 'react-codemirror';
import {changeSource} from '../redux/actionCreators';
import {getSource, getCodemirrorOptions} from '../redux/selectors';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

require('./CodeWindow.css');

class CodeWindow extends React.Component {
  render() {
    return (
      <Codemirror className="PyretIDE-CodeWindow"
                  value={this.props.source}
                  onChange={this.props.changeSource}
                  options={this.props.codemirrorOptions} />
    );
  }
}
CodeWindow.propTypes = {
  source: React.PropTypes.string,
  changeSource: React.PropTypes.func,
  codemirrorOptions: React.PropTypes.object,
};

export default connect(
  state => ({
    source: getSource(state),
    codemirrorOptions: getCodemirrorOptions(state),
  }),
  dispatch => bindActionCreators(
    {
      changeSource: changeSource
    },
    dispatch
  )
)(CodeWindow);
