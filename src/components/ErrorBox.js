import React from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import {styles} from './styles';

export class ErrorBox extends React.Component {
  render() {
    switch(false) {
      case typeof this.props.loadApiError === "undefined":
        return (
          <span style={styles.errorBox}>
              {this.props.loadApiError.message}
          </span>
        );
      case typeof this.props.runCodeError === "undefined":
        return (
          <span style={styles.errorBox}>
              {this.props.runCodeError.message}
          </span>
        );
      case typeof this.props.googleDriveError === "undefined":
        return (
          <span style={styles.errorBox}>
              {this.props.googleDriveError.message}
          </span>
        );
      default:
        return null; //if no error recorded in state do nothing
    }
  }
}

ErrorBox.propTypes = {
  loadApiError: React.PropTypes.string,
  runCodeError: React.PropTypes.string,
  googleDriveError: React.PropTypes.string,
};

export default connect(
  state => ({
    loadApiError: state.loadApi.error,
    runCodeError: state.runCode.error,
    googleDriveError: state.googleDrive.error,
  })
)(Radium(ErrorBox));
