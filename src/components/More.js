import React from "react";
import Menu from "react-menus";
import Radium from "radium";
import Button from "./Button";

function dropDown() {}

const items = [
  {
    label: "Download this file"
  },
  {
    label: "Documentation"
  },
  {
    label: "Font"
  },
  {
    label: "Report an Error"
  },
  {
    label: "Discuss Pyret"
  },
  {
    label: "Log Out"
  }
];

//TODO
//implement correct behavior
class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
  }
  render() {
    return(
      <div>
          <Button kind="more" onClick={()=>{this.setState({expanded: true});}}>More</Button>
          {this.state.expanded ? <Menu items={items} onClick={dropDown}/> : null}
      </div>
    );
  }
}

export default Radium(More);
