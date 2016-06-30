import * as actType from './action-types';
import * as constant from './constants';
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
      return Object.assign({}, state, {stage: constant.LoadApiStages.STARTED});
    case actType.FINISH_LOAD_RUNTIME:
      return Object.assign({}, state, {stage: constant.LoadApiStages.FINISHED,
                                       runtime: action.payload});
    case actType.FAIL_LOAD_RUNTIME:
      return Object.assign({}, state, {stage: constant.LoadApiStages.FAILED,
                                       error: action.payload});
    default:
      return state;
  }
}

function runCode(state = initialState.runCode, action) {
  switch (action.type) {
    case actType.START_PARSE:
      return Object.assign({}, state, {stage: 'parsing'});
    case actType.FINISH_PARSE:
      return Object.assign({}, state, {stage: null, ast: action.payload});
    case actType.FAIL_PARSE:
      console.error(action.payload);
      return Object.assign({}, state, {stage: null, error: action.payload});
    case actType.START_COMPILE:
      return Object.assign({}, state, {stage: 'compiling'});
    case actType.FINISH_COMPILE:
      return Object.assign({}, state, {stage: null, bytecode: action.payload});
    case actType.FAIL_COMPILE:
      return Object.assign({}, state, {stage: null, error: action.payload});
    case actType.START_EXECUTE:
      return Object.assign({}, state, {stage: 'executing'});
    case actType.FINISH_EXECUTE:
      return Object.assign({}, state, {stage: null, result: action.payload});
    case actType.FAIL_EXECUTE:
      return Object.assign({}, state, {stage: null, error: action.payload});
    case actType.STOP_RUN:
      return Object.assign({}, state, {stage: 'stopping'});
    case actType.PAUSE_RUN:
      return Object.assign({}, state, {pausing: true});
    case actType.CLEAR_STATE:
      return Object.assign({}, state.runCode);
    default:
      return state;
  }
}

const pyretReducer = combineReducers({
  loadApi,
  runCode,
  editor,
});

export default pyretReducer;
