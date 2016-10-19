import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {connectGoogleDrive} from '../redux/actionCreators';
import styles from './styles';
import Button from './Button';
import Spinner from './Spinner';
import * as selectors from '../redux/selectors';

export class Connect extends React.Component {
  render() {
    if (this.props.hasConnectedDrive) {
      return null;
    }
    if (this.props.isConnectingDrive) {
      return (
        <Button kind="googleDrive">
          <Spinner style={styles.spinners.toolbar} />
          Connecting to Google Drive...
        </Button>
      );
    }
    return (
      <Button
        kind="googleDrive"
        onClick={() => this.props.connectGoogleDrive()}
      >
        Connect to Google Drive
      </Button>
    );
  }
}

Connect.propTypes = {
  isConnectingDrive: React.PropTypes.bool,
  hasConnectedDrive: React.PropTypes.bool,
  connectGoogleDrive: React.PropTypes.func,
};

export default connect(
  state => ({
    isConnectingDrive: selectors.isConnectingDrive(state),
    hasConnectedDrive: selectors.hasConnectedDrive(state),
  }),
  dispatch => bindActionCreators({
    connectGoogleDrive: connectGoogleDrive,
  }, dispatch)
)(Connect);
