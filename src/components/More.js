import React from "react";
import Radium from "radium";
import Button from "./Button";

//TODO
//implement correct behavior
export class More extends React.Component {
  render() {
    return(
      <Button kind="toolbar"
              onClick={()=> this.setState({expanded: true})}>
        More
      </Button>
    );
  }
}

export default Radium(More);
