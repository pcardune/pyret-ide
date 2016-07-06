import React from 'react';
import {connect} from 'react-redux';
import {shareGoogleDrive} from '../redux/actionCreators';
import {bindActionCreators} from 'redux';
import {styles} from './styles';
import Button from './Button';
import Spinner from './Spinner';
import * as selectors from '../redux/selectors';

export class Share extends React.Component {
  render() {
    return (
      <span>
        {this.props.hasSavedDrive && !this.props.isSharingDrive &&
          <Button kind="toolbar"
                  onClick={() => this.props.shareGoogleDrive()}>
            Share
          </Button>
        }
        {this.props.hasSavedDrive && this.props.isSharingDrive &&
          <Button kind="toolbar">
            <Spinner style={styles.spinners.toolbar}/>
            Sharing...
          </Button>
        }
      </span>
    );
  }
}

Share.propTypes = {
  hasSavedDrive: React.PropTypes.any,
  isSharingDrive: React.PropTypes.bool,
  hasSharedDrive: React.PropTypes.any,
  shareGoogleDrive: React.PropTypes.func,
};

export default connect(
  state => ({
    isSharingDrive: selectors.isSharingDrive(state),
    hasSharedDrive: selectors.hasSharedDrive(state),
    hasSavedDrive: selectors.hasSavedDrive(state),
  }),
  dispatch => bindActionCreators({
    shareGoogleDrive: shareGoogleDrive,
  }, dispatch)
)(Share);
