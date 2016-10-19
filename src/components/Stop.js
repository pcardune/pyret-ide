import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import React from "react";
import Radium from "radium";
import Button from "./Button";
import {stop} from "../redux/actionCreators";
import {isRunning} from "../redux/selectors";
import styles from "./styles";

export class Stop extends React.Component {
  render() {
    if (this.props.running) {
      return (
        <Button
          style={styles.buttons.stop.stopping}
          onClick={this.props.onStop}
        >
          Stop
        </Button>
      );
    } else {
      return (
        <Button style={styles.buttons.stop.waiting}>
          Stop
        </Button>
      );
    }
  }
}

Stop.propTypes = {
  running: React.PropTypes.bool,
  onStop: React.PropTypes.func
};

export default connect(
  state => ({
    running: isRunning(state),
  }),
  dispatch => bindActionCreators({
    onStop: stop
  }, dispatch)
)(Radium(Stop));
