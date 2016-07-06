export const loadApiStages = {
  STARTED: 'started',
  FINISHED: 'finished',
  FAILED: 'failed',
};

export const runtimeStages = {
  PARSING: 'parsing',
  COMPILING: 'compiling',
  EXECUTING: 'executing',
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
  share: {
    STARTED: 'startedShare',
    FINISHED: 'finishedShare',
    FAILED: 'failedShare',
  },
};
