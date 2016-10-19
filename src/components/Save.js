import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createGoogleDrive, saveGoogleDrive} from '../redux/actionCreators';
import styles from './styles';
import Button from './Button';
import Spinner from './Spinner';
import * as selectors from '../redux/selectors';

//TODO: Link argument of saveGoogleDrive() to Input Value
export class Save extends React.Component {
  render() {
    if (!this.props.hasConnectedDrive) {
      return null;
    }
    if (this.props.isSavingDrive) {
      return (
        <Button kind="toolbar">
          <Spinner style={styles.spinners.toolbar} />
          Saving...
        </Button>
      );
    }
    var clickAction = this.props.hasFileId ?
      this.props.saveGoogleDrive :
      this.props.createGoogleDrive;
    return (
      <Button
        kind="toolbar"
        onClick={clickAction}
      >
        Save
      </Button>
    );
  }
}

Save.propTypes = {
  hasConnectedDrive: React.PropTypes.bool,
  isSavingDrive: React.PropTypes.bool,
  hasFileId: React.PropTypes.bool,
  saveGoogleDrive: React.PropTypes.func,
  createGoogleDrive: React.PropTypes.func,
};

export default connect(
  state => ({
    hasConnectedDrive: selectors.hasConnectedDrive(state),
    isSavingDrive: selectors.isSavingDrive(state),
    hasFileId: selectors.hasFileId(state),
  }),
  dispatch => bindActionCreators({
    saveGoogleDrive: saveGoogleDrive,
    createGoogleDrive: createGoogleDrive
  }, dispatch)
)(Save);
