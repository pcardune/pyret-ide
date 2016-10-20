import React, {PropTypes} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import Editor from './Editor';
import {openGoogleDrive} from '../redux/actionCreators';

@connect(
  null,
  {openGoogleDrive}
)
@withRouter
export default class PyretIDE extends React.Component {

  static propTypes = {
    params: PropTypes.shape({
      mode: PropTypes.oneOf(['program', 'share']),
      //    filename: PropTypes.string,
      fileId: PropTypes.string,
    }),
    openGoogleDrive: PropTypes.func.isRequired,
  };

  componentDidMount() {
    if (this.props.params.mode === 'program') {
      console.log("going to open a file...");
      this.props.openGoogleDrive(this.props.params.fileId);
    } else if (this.props.params.mode === 'share') {
      console.log("not implemented yet");
    }
  }

  render() {
    console.log("renderin PyretIDE with props", this.props);
    return (
      <Editor />
    );
  }
}
