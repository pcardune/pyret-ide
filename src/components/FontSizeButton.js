import React from "react";
import Radium from "radium";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {getFontSize} from "../redux/selectors";
import styles from './styles';
import Button from './Button';
import {incrementFontSize, decrementFontSize} from "../redux/actionCreators";

export class FontSizeButton extends React.Component {
  render() {
    return(
      <div style={styles.buttons.more.fontButtonContainer}>
        <Button
          style={styles.buttons.more.fontSizeButtons}
          onClick={this.props.decrementFontSize}
        >
          -
        </Button>
        <div style={{alignSelf: "center"}}>Font ({this.props.fontSize}px)</div>
        <Button
          style={styles.buttons.more.fontSizeButtons}
          onClick={this.props.incrementFontSize}
        >
          +
        </Button>
      </div>
    );
  }
}

FontSizeButton.propTypes = {
  fontSize: React.PropTypes.number,
  incrementFontSize: React.PropTypes.func,
  decrementFontSize: React.PropTypes.func,
};

export default connect(
  state => ({
    fontSize: getFontSize(state),
  }),
  dispatch => bindActionCreators({
    incrementFontSize: incrementFontSize,
    decrementFontSize: decrementFontSize,
  }, dispatch)
)(Radium(FontSizeButton));
