import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/stories/buttons');
  require('../src/components/stories/REPLValue');
}

configure(loadStories, module);
