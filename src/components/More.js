import React from "react";
import Radium from "radium";
import Button from "./Button";
import {isMoreMenuExpanded} from "../redux/selectors";
import {expandMoreMenu, collapseMoreMenu} from '../redux/actionCreators';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {styles} from './styles';

export class More extends React.Component {
  render() {
    if (this.props.expanded) {
      return(
        <Button kind="toolbar"
                style={styles.buttons.more.moreButton}
                onClick={()=> this.props.collapse()}>
          More
        </Button>
      );
    }
    return(
      <Button kind="toolbar"
              style={styles.buttons.more.moreButton}
              onClick={()=> this.props.expand()}>
        More
      </Button>
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
)(Radium(More));
