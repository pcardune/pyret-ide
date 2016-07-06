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

export function isConnectingDrive(state) {
  return (state.googleDrive.stage === constants.driveStages.connect.STARTED);
}

export function hasConnectedDrive(state) {
  return (state.googleDrive.drive);
}

export function isSavingDrive(state) {
  return (state.googleDrive.stage === constants.driveStages.save.STARTED);
}

export function hasSavedDrive(state) {
  return (state.googleDrive.save);
}

export function isSharingDrive(state) {
  return (state.googleDrive.stage === constants.driveStages.share.STARTED);
}

export function hasSharedDrive(state) {
  return (state.googleDrive.share);
}

export function getError(state) {
  return (state.loadApi.error || state.runCode.error || state.googleDrive.error);
}
