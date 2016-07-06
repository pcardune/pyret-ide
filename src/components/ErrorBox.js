import React from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import {styles} from './styles';
import {getError} from '../redux/selectors';

export class ErrorBox extends React.Component {
  render() {
    if (this.props.error) {
      return <span style={styles.errorBox}>{this.props.error.message}</span>;
    }
    return null;
  }
}

ErrorBox.propTypes = {
  error: React.PropTypes.object,
};

export default connect(
  state => ({error: getError(state)})
)(Radium(ErrorBox));
