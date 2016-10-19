import React from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import styles from './styles';
import {getError} from '../redux/selectors';
import {LanguageError} from '../errors';

export class ErrorBox extends React.Component {
  render() {
    console.log(this.props);
    if (this.props.error instanceof LanguageError) {
      return <div style={styles.errorBox}>{this.props.error.errorComponent}</div>;
    } else if (this.props.error) {
      return <div style={styles.errorBox}>{this.props.error.message}</div>;
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
