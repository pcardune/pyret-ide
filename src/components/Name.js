import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeProgramName} from '../redux/actionCreators';
import Input from './Input';
import * as selectors from '../redux/selectors';

export class Name extends React.Component {
  render() {
    if (!this.props.hasConnectedDrive) {
      return null;
    }
    return (
      <Input placeholder="Program Name"
             onChange={event => this.props.changeProgramName(event.target.value)}
      />
    );
  }
}

Name.propTypes = {
  hasConnectedDrive: React.PropTypes.bool,
  changeProgramName: React.PropTypes.func,
};

export default connect(
  state => ({
    hasConnectedDrive: selectors.hasConnectedDrive(state),
  }),
  dispatch => bindActionCreators(
    {
      changeProgramName: changeProgramName,
    }, dispatch)
)(Name);
