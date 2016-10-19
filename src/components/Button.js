import React from "react";
import Radium from "radium";
import styles from "./styles";

export class Button extends React.Component {
  render() {
    return (
      <button
        {...this.props}
        style={[
          styles.buttons.base,
          styles.buttons[this.props.kind],
          this.props.style
        ]}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  kind: React.PropTypes.string,
  children: React.PropTypes.node,
  style: React.PropTypes.object
};

export default Radium(Button);
