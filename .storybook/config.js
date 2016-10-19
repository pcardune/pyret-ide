import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/stories/buttons');
  require('../src/components/stories/REPLValue');
  require('../src/components/stories/errorBox');
  require('../src/components/stories/CodeWindow');
}

configure(loadStories, module);
