export const loadApiStages = {
  STARTED: 'started',
  FINISHED: 'finished',
  FAILED: 'failed',
};

export const runtimeStages = {
  PARSING: 'parsing',
  COMPILING: 'compiling',
  EXECUTING: 'executing',
  PAUSING: 'pausing',
};

export const driveStages = {
  connect: {
    STARTED: 'startedConnect',
    FINISHED: 'finishedConnect',
    FAILED: 'failedConnect',
  },
  save: {
    STARTED: 'startedSave',
    FINISHED: 'finishedSave',
    FAILED: 'failedSave',
  },
  open: {
    STARTED: 'startedOpen',
    FINISHED: 'finishedOpen',
    FAILED: 'failedOpen',
  },
  share: {
    STARTED: 'startedShare',
    FINISHED: 'finishedShare',
    FAILED: 'failedShare',
  },
};

export const loadTexts = [
  "Raising the masts...",
  "Securing the oarlocks...",
  "Hoisting the anchor...",
  "Swabbing the decks...",
  "Debarnacling the keel...",
  "Checking the cargo manifest...",
  "Assembling the crew...",
  "Inspecting the turnbuckles...",
  "Furling the rollers...",
  "Lashing the jib-boom...",
  "Tying the rigging...",
  "Reinforcing the hull...",
  "Bailing the bilge...",
  "Feeding the parrot...",
  "Consulting the map...",
  "Calibrating the compass...",
  "Polishing the spyglass...",
  "Latching the portholes..."
];

export const fontBoundary = {
  max: 56,
  min: 8,
};

//holds the key for the key value pair of the browser's  local storage object
export const LOCAL_STORAGE_SOURCE_KEY = 'source';
