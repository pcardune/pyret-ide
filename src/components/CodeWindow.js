import React from 'react';
import Codemirror from 'react-codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

export default class CodeWindow extends React.Component {
  constructor() {
    super();
    this.state = {code: "// Code"};
  }
  updateCode(newCode) {
    this.setState({
      code: newCode
    });
  }
  render() {
    var options = {
      lineNumbers: true,
    };
    return (
        <Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
    );
  }
}
