import React from "react";
import {storiesOf} from "@kadira/storybook";
import {ErrorBox} from '../ErrorBox';

storiesOf("Error Box", module)
  .add("Error", () => (
    <ErrorBox error={{message: "Your error goes here"}} />
  ));
