import React from "react";
import Radium from "radium";
import styles from "./styles";

export class Input extends React.Component {
  render () {
    return (
      <input
        {...this.props}
        type="text"
        style={[
          styles.forms.base,
          styles.forms[this.props.kind],
          this.props.style
        ]}
      />
    );
  }
}

Input.propTypes = {
  kind: React.PropTypes.string,
  style: React.PropTypes.object
};

export default Radium(Input);
