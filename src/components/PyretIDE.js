import React from 'react';

import Toolbar from './Toolbar';

export default class PyretIDE extends React.Component {
  render() {
    return (
      <div>
        <Toolbar logo="https://code.pyret.org/img/pyret-logo.png"/>
        The Pyret IDE!
      </div>
    );
  }
}
