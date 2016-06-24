import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/stories/buttons');
}

configure(loadStories, module);
