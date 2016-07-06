import React from "react";
import Radium from "radium";
import {styles} from "./styles";

export class Input extends React.Component {
  render () {
    return (
      <input
        placeholder={this.props.defaultValue}
        style={[
          styles.forms.base,
          styles.forms[this.props.kind],
          this.props.style
        ]}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
      />
    );
  }
}

Input.propTypes = {
  kind: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  style: React.PropTypes.object
};

export default Radium(Input);
