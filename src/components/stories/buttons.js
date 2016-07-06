import React from "react";
import {storiesOf, linkTo} from "@kadira/storybook";
import {Stop} from "../Stop";
import {Run} from "../Run";
import {Connect} from '../Connect';
import {Save} from '../Save';
import {Share} from '../Share';


storiesOf("RunButton", module)
  .add("not running", () => (
    <Run running={false} onRun={linkTo("RunButton", "running")}/>
  ))
  .add("running", () => (
    <Run running={true}/>
  ));
storiesOf("StopButton", module)
  .add("not running", () => (
    <Stop running={false}/>
  ))
  .add("running", () => (
    <Stop running={true} onStop={linkTo("StopButton", "not running")}/>
  ));
storiesOf("GoogleDriveButton", module)
  .add("Connect", () => (
    <Connect/>
  ))
  .add("Connecting", () => (
    <Connect isConnectingDrive={true}/>
  ))
  .add("Connected", () => (
    <Connect hasConnectedDrive={true}/>
  ))
  .add("Save", () => (
    <Save hasConnectedDrive={true}/>
  ))
  .add("Saving", () => (
    <Save hasConnectedDrive={true} isSavingDrive={true}/>
  ))
  .add("Share", () => (
    <Share hasSavedDrive={true}/>
  ))
  .add("Sharing", () => (
    <Share hasSavedDrive={true} isSharingDrive={true}/>
  ));
