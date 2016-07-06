import React from 'react';
import {connect} from 'react-redux';
import Input from './Input';
import * as selectors from '../redux/selectors';

export class Save extends React.Component {
  render() {
    if (!this.props.hasConnectedDrive) {
      return null;
    }
    if (this.props.isSavingDrive) {
      return (
        <Input placeholder="Program Name"/>
      );
    }
    return (
      <Input placeholder="Program Name"/>
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
  })
)(Save);
