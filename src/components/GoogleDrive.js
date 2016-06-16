import React from "react";
import Radium from "radium";
import Button from "./Button";

//TODO
//research google APIs
//implement correct behavior
class GoogleDrive extends React.Component {
  constructor(props){
    super(props);
    this.state = {connecting: false};
  }
  render() {
    if (this.state.connecting) {
      return (
        <Button kind="googleDrive" style={{color: "#33331a"}}>Connecting</Button>
      );
    }
    else {
      return (
        <Button kind="googleDrive">Connect to Google Drive</Button>
      );
    }
  }
}

export default Radium(GoogleDrive);
