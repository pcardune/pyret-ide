import React from 'react';
import {connect} from 'react-redux';
import {openGoogleDrive} from '../redux/actionCreators';
import {bindActionCreators} from 'redux';
import {styles} from './styles';
import Button from './Button';
import Spinner from './Spinner';
import * as selectors from '../redux/selectors';

//TODO: Link argument of saveGoogleDrive() to Input Value
export class Open extends React.Component {
  render() {
    if (!this.props.hasConnectedDrive) {
      return null;
    }
    if (this.props.isOpeningDrive) {
      return (
        <Button kind="toolbar">
          <Spinner style={styles.spinners.toolbar}/>
          Opening...
        </Button>
      );
    }
    return (
      <Button kind="toolbar"
              onClick={() => this.props.openGoogleDrive("File")}>
        Open
      </Button>
    );
  }
}

Open.propTypes = {
  hasConnectedDrive: React.PropTypes.bool,
  isOpeningDrive: React.PropTypes.bool,
  openGoogleDrive: React.PropTypes.func,
};

export default connect(
  state => ({
    isOpeningDrive: selectors.isOpeningDrive(state),
    hasConnectedDrive: selectors.hasConnectedDrive(state),
  }),
  dispatch => bindActionCreators({
    openGoogleDrive: openGoogleDrive,
  }, dispatch)
)(Open);
