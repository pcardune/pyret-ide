import React from "react";
import {storiesOf, action} from "@kadira/storybook";
import {HoverHighlight} from '../HoverHighlight';


storiesOf("HoverHighlight", module)
  .add("gray", () => (
    <HoverHighlight
      color="#eee"
      target="definitions://"
      highlightsOn={action('highlighted')}
      highlightsOff={action('unhighlighted')}
      highlights={[]}
    >
      <span>the function</span>
    </HoverHighlight>
  ));

