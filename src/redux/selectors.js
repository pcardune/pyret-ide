import * as constants from './constants';

export function isRunning(state) {
  return (Object.values(constants.runtimeStages)
                .includes(state.getIn(['runCode', 'stage'])));
}

export function isLoadingRuntime(state) {
  return state.getIn(['loadApi', 'stage']) === constants.loadApiStages.STARTED;
}

export function hasLoadedRuntime(state) {
  return state.getIn(['loadApi', 'stage']) === constants.loadApiStages.FINISHED;
}

export function isConnectingDrive(state) {
  return state.getIn(['googleDrive', 'stage']) ===
    constants.driveStages.connect.STARTED;
}

export function hasConnectedDrive(state) {
  return state.getIn(['googleDrive', 'drive']) !== null;
}

export function isSavingDrive(state) {
  return state.getIn(['googleDrive', 'stage']) === constants.driveStages.save.STARTED;
}

export function hasSavedDrive(state) {
  return state.getIn(['googleDrive', 'save']) !== null;
}

export function isSharingDrive(state) {
  return state.getIn(['googleDrive', 'stage']) === constants.driveStages.share.STARTED;
}

export function isOpeningDrive(state) {
  return state.getIn(['googleDrive', 'stage']) === constants.driveStages.open.STARTED;
}

export function hasOpenedDrive(state) {
  return state.getIn(['googleDrive', 'open'

export function hasSharedDrive(state) {
  return state.getIn(['googleDrive', 'share']) !== null;
}

export function getError(state) {
  return (state.getIn(['loadApi', 'error']) ||
          state.getIn(['runCode', 'error']) ||
          state.getIn(['googleDrive', 'error'])
  );
}

export function getResult(state) {
  return state.getIn(['editor', 'result']);
}

export function getSource(state) {
  return state.getIn(['editor', 'source']);
}

export function getCode(state) {
  return state.getIn(['REPL', 'code']);
}

export function isMoreMenuExpanded(state) {
  return state.getIn(['moreMenu', 'expanded']);
}

export function getFontSize(state) {
  return state.getIn(['moreMenu', 'fontSize']);
}

export function hasHistory(state) {
  return state.getIn(['REPL', 'history']) !== [];
}

export function getHistory(state) {
  return state.getIn(['REPL', 'history']);
}

export function getCodemirrorOptions(state) {
  return Object.assign(
    {
      lineNumbers: true,
    },
    state.getIn(['editor', 'codemirrorOptions'])
  );
}
