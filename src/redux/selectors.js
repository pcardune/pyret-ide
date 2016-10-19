import { createSelector } from 'reselect';
import * as constants from './constants';

function equalitySelector(selector, expectedValue) {
  return createSelector(selector, value => value === expectedValue);
}

export function isRunning(state) {
  return (Object.values(constants.runtimeStages)
                .includes(state.getIn(['runCode', 'stage'])));
}

export function isRunDropdownExpanded (state) {
  return state.getIn(['runDropdown', 'expanded']);
}

const loadApiStage = state => state.getIn(['loadApi', 'stage']);
export const isLoadingRuntime = equalitySelector(
  loadApiStage,
  constants.loadApiStages.STARTED
);

export const hasLoadedRuntime = equalitySelector(
  loadApiStage,
  constants.loadApiStages.FINISHED
);

const googleDrive = state => state.get('googleDrive');
const googleDriveStageSelector = createSelector(
  googleDrive,
  googleDrive => googleDrive.get('stage')
);

export const isConnectingDrive = equalitySelector(
  googleDriveStageSelector,
  constants.driveStages.connect.STARTED
);

export const isSavingDrive = equalitySelector(
  googleDriveStageSelector,
  constants.driveStages.save.STARTED
);

export const isSharingDrive = equalitySelector(
  googleDriveStageSelector,
  constants.driveStages.share.STARTED
);

export const isOpeningDrive = equalitySelector(
  googleDriveStageSelector,
  constants.driveStages.open.STARTED
);

export const hasOpenedDrive = equalitySelector(
  googleDriveStageSelector,
  constants.driveStages.open.FINISHED
);

export const hasConnectedDrive = createSelector(
  googleDrive,
  drive => drive.get('drive') !== null
);

export const getFileId = createSelector(
  googleDrive,
  drive => drive.get('fileId')
);

export const hasFileId = createSelector(
  getFileId,
  fileId => fileId !== null
);

export const getFileName = createSelector(
  googleDrive,
  drive => drive.get('name')
);

export const hasSharedDrive = createSelector(
  googleDrive,
  drive => drive.get('share') !== null
);

export function getError(state) {
  return (state.getIn(['loadApi', 'error']) ||
          state.getIn(['runCode', 'error']) ||
          state.getIn(['googleDrive', 'error'])
  );
}

const editor = state => state.get('editor');

export const getResult = createSelector(
  editor,
  editor => editor.get('result')
);

export const getSource = createSelector(
  editor,
  editor => editor.get('source')
);

export function getHighlightsFor(state, uri) {
  let highlights = state.getIn(['editor', 'highlights', uri]);
  if(highlights) { return highlights.toJS(); }
  else { return []; }
}

export const REPL = state => state.get('REPL');
export const getCode = createSelector(
  REPL,
  REPL => REPL.get('code')
);

export const hasHistory = createSelector(
  REPL,
  REPL => REPL.get('history') !== []
);

export const getHistory = createSelector(
  REPL,
  REPL => REPL.get('history')
);

export function isMoreMenuExpanded(state) {
  return state.getIn(['moreMenu', 'expanded']);
}

export function getFontSize(state) {
  return state.getIn(['moreMenu', 'fontSize']);
}

export function getCodemirrorOptions(state) {
  return Object.assign(
    {
      lineNumbers: true,
    },
    state.getIn(['editor', 'codemirrorOptions'])
  );
}
