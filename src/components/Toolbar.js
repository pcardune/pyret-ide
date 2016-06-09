import React from "react";

const toolbarStyle = {color: "white", backgroundColor: "gray", width: "100%", height: 40, position: "fixed"};

export default class Toolbar extends React.Component {
  render() {
    return (
      <div style={toolbarStyle}> 
        <img style={{height: "100%"}} src={this.props.logo}/>
        this is the toolbar!
      </div>
    );
  } 
}

Toolbar.propTypes = {logo: React.PropTypes.string};