import React from "react";
import {storiesOf, linkTo} from "@kadira/storybook";
import {Stop} from "../Stop";
import {Connect} from '../Connect';
import {Save} from '../Save';
import {Share} from '../Share';
import {More} from '../More';
import {MoreMenu} from '../MoreMenu';


storiesOf("StopButton", module)
  .add("not running", () => (
    <Stop running={false} />
  ))
  .add("running", () => (
    <Stop running onStop={linkTo("StopButton", "not running")} />
  ));
storiesOf("GoogleDriveButton", module)
  .add("Connect", () => (
    <Connect />
  ))
  .add("Connecting", () => (
    <Connect isConnectingDrive />
  ))
  .add("Connected", () => (
    <Connect hasConnectedDrive />
  ))
  .add("Save", () => (
    <Save hasConnectedDrive />
  ))
  .add("Saving", () => (
    <Save hasConnectedDrive isSavingDrive />
  ))
  .add("Share", () => (
    <Share hasSavedDrive />
  ))
  .add("Sharing", () => (
    <Share hasSavedDrive isSharingDrive />
  ));
storiesOf("MoreButton", module)
  .add("Button", () => (
    <More />
  ))
  .add("MoreMenu", () => (
    <MoreMenu expanded />
  ));
