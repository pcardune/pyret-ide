import React from 'react';
import Radium from 'radium';
import Logo from './Logo';
import Stop from './Stop';
import GoogleDrive from './GoogleDrive';
import More from './More';
import Run from './Run';
import {styles} from './styles';

class Toolbar extends React.Component {
  render() {
    return (
      <div style={styles.toolbar}>
        <Logo kind="toolbar"/>
        <GoogleDrive/>
        <More/>
        <Stop/>
        <Run gif="https://code.pyret.org/img/pyret-spin.gif"/>
      </div>
    );
  }
}

Toolbar.propTypes = {logo: React.PropTypes.string};

export default Radium(Toolbar);
