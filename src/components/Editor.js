import React from 'react';
import SplitPane from '@mnmtanish/react-split-pane';
import {connect} from 'react-redux';

import Toolbar from './Toolbar';
import CodeWindow from './CodeWindow';
import Spinner from './Spinner';

class Editor extends React.Component {
  render() {
    return (
      <div>
        <Toolbar logo="https://code.pyret.org/img/pyret-logo.png"/>
        {this.props.isLoadingRuntime && <Spinner />}
        <div style={{padding: 40}}>
          <SplitPane defaultSize="50%" split="vertical">
            <div><CodeWindow/></div>
            <div><p>{this.props.result}</p></div>
          </SplitPane>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  isLoadingRuntime: React.PropTypes.bool,
  result: React.PropTypes.any,
};


export default connect(
  state => {
    return {
      isLoadingRuntime: state.loadApi.stage === 'started',
      result: state.runCode.result,
    };
  }
)(Editor);
