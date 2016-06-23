import React from 'react';

import Toolbar from './Toolbar';
import CodeWindow from './CodeWindow';
import SplitPane from '@mnmtanish/react-split-pane';

export default class Editor extends React.Component {
  render() {
    return (
      <div>
        <Toolbar logo="https://code.pyret.org/img/pyret-logo.png"/>
        <div style={{padding: 40}}>
          <SplitPane defaultSize="50%" split="vertical">
            <div><CodeWindow/></div>
            <div><p>Compiled</p></div>
          </SplitPane>
        </div>
      </div>
    );
  }
}
