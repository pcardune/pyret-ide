import React from "react";
import Connect from './Connect';
import Save from './Save';
import Share from './Share';

//TODO
//research google APIs
//implement correct behavior
export default class GoogleDrive extends React.Component {
  render() {
    return (
      <span>
        <Connect/>
        <Save/>
        <Share/>
      </span>
    );
  }
}
