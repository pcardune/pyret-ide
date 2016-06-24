import React from "react";
import {storiesOf, linkTo} from "@kadira/storybook";
import {Stop} from "../Stop";
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
