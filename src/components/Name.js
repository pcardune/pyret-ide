import React from 'react';
import {connect} from 'react-redux';
import Input from './Input';
import * as selectors from '../redux/selectors';

export class Name extends React.Component {
  render() {
    if (!this.props.hasConnectedDrive) {
      return null;
    }
    return (
      <Input placeholder="Program Name"/>
    );
  }
}

Name.propTypes = {
  hasConnectedDrive: React.PropTypes.bool,
};

export default connect(
  state => ({
    hasConnectedDrive: selectors.hasConnectedDrive(state),
  })
)(Name);
