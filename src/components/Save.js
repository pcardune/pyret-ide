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
    return (
      <span>
        {this.props.hasConnectedDrive && !this.props.isSavingDrive &&
         <span>
           <Input kind="program" defaultValue="Program Name"></Input>
           <Button kind="toolbar"
                   onClick={() => this.props.saveGoogleDrive("File")}>
             Save
           </Button>
         </span>
        }
        {this.props.hasConnectedDrive && this.props.isSavingDrive &&
         <span>
           <Input kind="program" defaultValue="Program Name"></Input>
           <Button kind="toolbar">
             <Spinner style={styles.spinners.toolbar}/>
             Saving...
           </Button>
         </span>
        }
      </span>
    );
  }
}

Save.propTypes = {
  hasConnectedDrive: React.PropTypes.any,
  isSavingDrive: React.PropTypes.bool,
  hasSavedDrive: React.PropTypes.any,
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
