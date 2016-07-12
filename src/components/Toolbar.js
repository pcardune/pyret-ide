import React from 'react';
import Radium from 'radium';
import Logo from './Logo';
import Stop from './Stop';
import Connect from './Connect';
import Save from './Save';
import Share from './Share';
import More from './More';
import Run from './Run';
import Name from './Name';
import {styles} from './styles';
import MoreMenu from "./MoreMenu";

class Toolbar extends React.Component {
  render() {
    return (
      <div style={styles.toolbar.base}>
        <div style={styles.toolbar.tools}>
          <Logo kind="toolbar"/>
          <Connect/>
          <Name/>
          <Save/>
          <Share/>
          <More/>
          <MoreMenu/>
        </div>
        <div style={styles.toolbar.controls}>
          <Run/>
          <Stop/>
        </div>
      </div>
    );
  }
}

export default Radium(Toolbar);
