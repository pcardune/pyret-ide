import React from 'react';
import {connect} from 'react-redux';
import {saveGoogleDrive} from '../redux/actionCreators';
import {bindActionCreators} from 'redux';
import {styles} from './styles';
import Button from './Button';
import Input from './Input';
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
        <span>
          <Input kind="program" placeholder="Program Name"/>
          <Button kind="toolbar">
            <Spinner style={styles.spinners.toolbar}/>
            Saving...
          </Button>
        </span>
      );
    }
    return (
      <span>
        <Input kind="program" placeholder="Program Name"/>
        <Button kind="toolbar"
                onClick={() => this.props.saveGoogleDrive("File")}>
          Save
        </Button>
      </span>
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
