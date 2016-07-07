import React from 'react';
import {connect} from 'react-redux';
import {saveGoogleDrive} from '../redux/actionCreators';
import {bindActionCreators} from 'redux';
import {styles} from './styles';
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
          <Spinner style={styles.spinners.toolbar}/>
          Saving...
        </Button>
      );
    }
    return (
      <Button kind="toolbar"
              onClick={() => this.props.saveGoogleDrive("File")}>
        Save
      </Button>
    );
  }
}

Save.propTypes = {
  hasConnectedDrive: React.PropTypes.bool,
  isSavingDrive: React.PropTypes.bool,
  hasSavedDrive: React.PropTypes.bool,
  saveGoogleDrive: React.PropTypes.func,
};

export default connect(
  state => ({
    hasConnectedDrive: selectors.hasConnectedDrive(state),
    isSavingDrive: selectors.isSavingDrive(state),
    hasSavedDrive: selectors.hasSavedDrive(state),
  }),
  dispatch => bindActionCreators({
    saveGoogleDrive: saveGoogleDrive,
  }, dispatch)
)(Save);
