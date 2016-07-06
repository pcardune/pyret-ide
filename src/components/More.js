import React from "react";
import Menu from "react-menus";
import Radium from "radium";
import Button from "./Button";

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

function onClick(event, props, index){
}
//TODO
//implement correct behavior
export class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
  }
  render() {
    return(
      <span>
        <Button kind="toolbar"
                onClick={()=>{this.setState({expanded: true});}}>
          More
        </Button>
        {this.state.expanded ? <Menu items={items} onClick={onClick}/> : null}
      </span>
    );
  }
}

export default Radium(More);
