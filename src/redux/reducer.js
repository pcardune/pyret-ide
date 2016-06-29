import * as actType from './action-types';
import { combineReducers } from 'redux';

const loadApiState = {
  loadingApi: undefined,
  runtimeApi: undefined,
  errorApi: undefined,
};

const runCodeState = {
  runtimeStage: undefined,
  ast: undefined,
  bytecode: undefined,
  result: undefined,
  errorRun: undefined,
  pausing: false
};

function loadApi(state = loadApiState, action) {
  switch (action.type) {
    case actType.START_LOAD_RUNTIME:
      return Object.assign({}, state, {loadingApi: 'started'});
    case actType.FINISH_LOAD_RUNTIME:
      return Object.assign({}, state, {loadingApi: 'finished', runtimeApi: action.payload});
    case actType.FAIL_LOAD_RUNTIME:
      return Object.assign({}, state, {loadingApi: 'failed', error: action.payload});
    default:
      return state;
  }
}

function runCode(state = runCodeState, action) {
  switch (action.type) {
    case actType.START_PARSE:
      return Object.assign({}, state, {runtimeStage: 'parsing'});
    case actType.FINISH_PARSE:
      return Object.assign({}, state, {ast: action.payload});
    case actType.FAIL_PARSE:
      return Object.assign({}, state, {error: action.payload});
    case actType.START_COMPILE:
      return Object.assign({}, state, {runtimeStage: 'compiling'});
    case actType.FINISH_COMPILE:
      return Object.assign({}, state, {bytecode: action.payload});
    case actType.FAIL_COMPILE:
      return Object.assign({}, state, {error: action.payload});
    case actType.START_EXECUTE:
      return Object.assign({}, state, {runtimeStage: 'executing'});
    case actType.FINISH_EXECUTE:
      return Object.assign({}, state, {result: action.payload});
    case actType.FAIL_EXECUTE:
      return Object.assign({}, state, {error: action.payload});
    case actType.STOP_RUN:
      return Object.assign({}, state, {runtimeStage: 'stopping'});
    case actType.PAUSE_RUN:
      return Object.assign({}, state, {pausing: true});
    case actType.CLEAR_STATE:
      return Object.assign({}, runCodeState);
    default:
      return state;
  }
}

const pyretReducer = combineReducers({
  runCode,
  loadApi
});

export default pyretReducer;
