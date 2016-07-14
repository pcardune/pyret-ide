import React from "react";
import Radium from "radium";
import {isMoreMenuExpanded} from "../redux/selectors";
import {connect} from 'react-redux';
import {styles} from './styles';
import Button from './Button';
import FontSizeButton from './FontSizeButton';

//TODO:
//implement google drive functionality with "Download this File" button
//implement google drive functionality with "Log out" button
export class MoreMenu extends React.Component {
  render() {
    if (this.props.expanded) {
      return(
        <div style={styles.buttons.more.menuContainer}>
          <Button style={styles.buttons.more.menuItems}>Download this File</Button>
          <Button style={styles.buttons.more.menuItems}>
            <a href="http://www.pyret.org/docs/latest/" style={styles.linkStyle}>
              Documentation
            </a>
          </Button>
          <FontSizeButton/>
          <Button style={styles.buttons.more.menuItems}>
            <a href="https://github.com/brownplt/pyret-lang/issues/new" style={styles.linkStyle}>
               Report an Issue
            </a>
          </Button>
          <Button style={styles.buttons.more.menuItems}>
            <a href="https://groups.google.com/forum/#!forum/pyret-discuss" style={styles.linkStyle}>
              Discuss Pyret
            </a>
          </Button>
          <Button style={styles.buttons.more.menuItems}>Log out</Button>
        </div>
      );
    }
    return null;
  }
}

MoreMenu.propTypes = {
  expanded: React.PropTypes.bool,
};

export default connect(
  state => ({
    expanded: isMoreMenuExpanded(state),
  }))(Radium(MoreMenu));
