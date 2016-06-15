import React from "react";
import Radium from "radium";
import {styles} from "./styles";

class Button extends React.Component {
  render() {
    return (
      <button
        style={[
          styles.buttons.base,
          styles.buttons[this.props.kind]
        ]}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  kind: React.PropTypes.oneOf(styles.buttons).isRequired
};

export default Radium(Button);
