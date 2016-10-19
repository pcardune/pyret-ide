import React from "react";
import Radium from "radium";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ClickOutside from 'react-click-outside';
import Button from "./Button";
import {isMoreMenuExpanded} from "../redux/selectors";
import {expandMoreMenu, collapseMoreMenu} from '../redux/actionCreators';
import styles from './styles';
import MoreMenu from "./MoreMenu";

export class More extends React.Component {
  handleClickOutside() {
    if (this.props.expanded) {
      this.props.collapse();
    }
  }
  render() {
    return(
      <div>
        <Button
          kind="toolbar"
          style={styles.buttons.more.moreButton}
          onClick={() =>
                  this.props.expanded ? this.props.collapse() : this.props.expand()}
        >
          More ▾
        </Button>
        <MoreMenu />
      </div>
    );
  }
}

More.propTypes = {
  expanded: React.PropTypes.bool,
  expand: React.PropTypes.func,
  collapse: React.PropTypes.func,
};

export default connect(
  state => ({
    expanded: isMoreMenuExpanded(state),
  }),
  dispatch => bindActionCreators( {
    expand: expandMoreMenu,
    collapse: collapseMoreMenu,
  }, dispatch)
)(ClickOutside(Radium(More)));
