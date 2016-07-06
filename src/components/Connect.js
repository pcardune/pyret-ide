import React from 'react';
import {connect} from 'react-redux';
import {connectGoogleDrive} from '../redux/actionCreators';
import {bindActionCreators} from 'redux';
import {styles} from './styles';
import Button from './Button';
import Spinner from './Spinner';
import * as selectors from '../redux/selectors';

export class Connect extends React.Component {
  render() {
    return (
      <span>
        {!this.props.hasConnectedDrive && !this.props.isConnectingDrive &&
          <Button kind="googleDrive"
                  onClick={() => this.props.connectGoogleDrive()}>
            Connect to Google Drive
          </Button>
        }
        {!this.props.hasConnectedDrive && this.props.isConnectingDrive &&
         <Button kind="googleDrive">
           <Spinner style={styles.spinners.toolbar}/>
           Connecting to Google Drive...
         </Button>
        }
      </span>
    );
  }
}
Connect.propTypes = {
  isConnectingDrive: React.PropTypes.bool,
  hasConnectedDrive: React.PropTypes.any,
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
