import * as constants from './constants';

export function isRunning(state) {
  return (Object.values(constants.runtimeStages).includes(state.runCode.stage));
}

export function isLoadingRuntime(state) {
  return (state.loadApi.stage === constants.loadApiStages.STARTED);
}

export function hasLoadedRuntime(state) {
  return (state.loadApi.stage === constants.loadApiStages.FINISHED);
}

export function getError(state) {
  return (state.loadApi.error || state.runCode.error || state.googleDrive.error);
}
