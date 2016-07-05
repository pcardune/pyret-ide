import * as actType from './action-types';
import * as constants from './constants';
import { combineReducers } from 'redux';

const initialState = {
  loadApi: {
    stage: undefined,
    runtime: undefined,
    error: undefined,
  },
  runCode: {
    stage: undefined,
    ast: undefined,
    bytecode: undefined,
    result: undefined,
    error: undefined,
    pausing: false
  },
  editor: {
    source: '// Code',
  },
  googleDrive: {
    stage: undefined,
    drive: undefined,
    save: undefined,
    share: undefined,
    error: undefined,
  },
};

function editor(state = initialState.editor, action) {
  switch (action.type) {
    case actType.CHANGE_SOURCE:
      return Object.assign({}, state, {source: action.payload});
    default:
      return state;
  }
}

function loadApi(state = initialState.loadApi, action) {
  switch (action.type) {
    case actType.START_LOAD_RUNTIME:
      return Object.assign({}, state, {stage: constants.loadApiStages.STARTED});
    case actType.FINISH_LOAD_RUNTIME:
      return Object.assign({}, state, {stage: constants.loadApiStages.FINISHED,
                                       runtime: action.payload});
    case actType.FAIL_LOAD_RUNTIME:
      return Object.assign({}, state, {stage: constants.loadApiStages.FAILED,
                                       error: action.payload});
    default:
      return state;
  }
}

function runCode(state = initialState.runCode, action) {
  switch (action.type) {
    case actType.START_PARSE:
      return Object.assign({}, state, {stage: constants.runtimeStages.PARSING});
    case actType.FINISH_PARSE:
      return Object.assign({}, state, {stage: null, ast: action.payload});
    case actType.FAIL_PARSE:
      console.error(action.payload);
      return Object.assign({}, state, {stage: null, error: action.payload});
    case actType.START_COMPILE:
      return Object.assign({}, state, {stage: constants.runtimeStages.COMPILING});
    case actType.FINISH_COMPILE:
      return Object.assign({}, state, {stage: null, bytecode: action.payload});
    case actType.FAIL_COMPILE:
      return Object.assign({}, state, {stage: null, error: action.payload});
    case actType.START_EXECUTE:
      return Object.assign({}, state, {stage: constants.runtimeStages.EXECUTING});
    case actType.FINISH_EXECUTE:
      return Object.assign({}, state, {stage: null, result: action.payload});
    case actType.FAIL_EXECUTE:
      return Object.assign({}, state, {stage: null, error: action.payload});
    case actType.STOP_RUN:
      return Object.assign({}, state, {stage: null});
    case actType.PAUSE_RUN:
      return Object.assign({}, state, {pausing: true});
    case actType.CLEAR_STATE:
      return Object.assign({}, state.runCode);
    default:
      return state;
  }
}

function googleDrive(state = initialState.googleDrive, action) {
  switch (action.type) {
    case actType.START_CONNECT_DRIVE:
      return Object.assign({}, state, {
        stage: constants.driveStages.connect.STARTED
      });
    case actType.FINISH_CONNECT_DRIVE:
      return Object.assign({}, state, {
        stage: constants.driveStages.connect.FINISHED,
        drive: action.payload
      });
    case actType.FAIL_CONNECT_DRIVE:
      return Object.assign({}, state, {
        stage: constants.driveStages.connect.FAILED,
        error: action.payload});
    case actType.START_SAVE_DRIVE:
      return Object.assign({}, state, {
        stage: constants.driveStages.save.STARTED
      });
    case actType.FINISH_SAVE_DRIVE:
      return Object.assign({}, state, {
        stage: constants.driveStages.save.FINISHED,
        save: action.payload
      });
    case actType.FAIL_SAVE_DRIVE:
      return Object.assign({}, state, {
        stage: constants.driveStages.save.FAILED,
        error: action.payload
      });
    case actType.START_SHARE_DRIVE:
      return Object.assign({}, state, {
        stage: constants.driveStages.share.STARTED
      });
    case actType.FINISH_SHARE_DRIVE:
      return Object.assign({}, state, {
        stage: constants.driveStages.share.FINISHED,
        share: action.payload
      });
    case actType.FAIL_SHARE_DRIVE:
      return Object.assign({}, state, {
        stage: constants.driveStages.share.FAILED,
        error: action.payload
      });
    default:
      return state;
  }
}


const pyretReducer = combineReducers({
  loadApi,
  runCode,
  editor,
  googleDrive,
});

export default pyretReducer;
