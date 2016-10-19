import React from "react";
import {storiesOf, action} from "@kadira/storybook";
import {ErrorBox} from '../ErrorBox';
import {LanguageError} from '../../errors';
import {HoverHighlight} from '../HoverHighlight';

storiesOf("Error Box", module)
  .add("Error", () => (
    <ErrorBox error={{message: "Your error goes here"}} />
  ))
  .add("Error", () => (
    <ErrorBox error={
      new LanguageError(
        <div>
          Error at <HoverHighlight
              color="pink"
              target="definitions://"
              highlightsOn={action('on')}
              highlightsOff={action('off')}
              highlights={[]}
            >
              this spot
            </HoverHighlight>.
        </div>)
    } />
  ));
