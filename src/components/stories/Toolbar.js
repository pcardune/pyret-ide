import React from "react";
import {storiesOf, action, linkTo} from "@kadira/storybook";
import {Stop} from "../Stop";
import {GoogleDrive} from "../GoogleDrive";
import {More} from "../More";
import {Run} from "../Run";

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
storiesOf("More Button", module)
  .add("collapsed", () => (
    <More/>
  ))
  .add("expanded", () => (
    <More/>
  ));
storiesOf("GoogleDrive Button", module)
  .add("connect to", () => (
    <GoogleDrive/>
  ))
  .add("connecting", () => (
    <GoogleDrive/>
  ))
  .add("program name", () => (
    <GoogleDrive/>
  ));

