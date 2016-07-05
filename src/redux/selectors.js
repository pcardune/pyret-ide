import * as constants from './constants';

export function isRunning(state) {
  return (Object.values(constants.runtimeStages).includes(state.runCode.stage));
}

export function isLoadingRuntime(state) {
  return (Object.values(constants.loadApiStages).includes(state.loadApi.stage));
}

export function hasLoadedRuntime(state) {
  return (state.loadAPi.stage === constants.LoadApiStages.FINISHED);
}

export function getError(state) {
  return (state.loadApi.error || state.runCode.error || state.googleDrive.error);
}
