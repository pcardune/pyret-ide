import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Codemirror from 'react-codemirror';
import {changeSource} from '../redux/actionCreators';
import {getSource, getCodemirrorOptions} from '../redux/selectors';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

require('./CodeWindow.css');

export class CodeWindow extends React.Component {

  drawHighlights(highlights) {
    let cm = this.codeMirror.getCodeMirror();
    highlights.forEach(function(h) {
      let m = cm.markText(h.span.from, h.span.to, {
        css: "background-color: " + h.color
      });
    });
  }

  clearHighlights() {
    let cm = this.codeMirror.getCodeMirror();
    cm.getAllMarks().forEach(m => m.clear());
  }

  render() {
    return (
      <Codemirror ref={(ref) => this.codeMirror = ref}
                  className="PyretIDE-CodeWindow"
                  value={this.props.source || ''}
                  onChange={this.props.changeSource}
                  options={this.props.codemirrorOptions} />
    );
  }

  componentDidMount() {
    this.drawHighlights(this.props.highlights);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.highlights !== nextProps.highlights) {
      this.clearHighlights();
      this.drawHighlights(nextProps.highlights);
    }
  }

}

CodeWindow.propTypes = {
  source: React.PropTypes.string,
  changeSource: React.PropTypes.func,
  codemirrorOptions: React.PropTypes.object,
  highlights: React.PropTypes.arrayOf(React.PropTypes.object),
};

CodeWindow.defaultProps = {
  highlights: []
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
