import * as actType from './action-types';

const initialState = {
  loadingApi: undefined,
  runtimeApi: undefined,
};

function loadApi(state = initialState, action) {
  switch (action.type) {
    case actType.START_LOAD_RUNTIME:
      return Object.assign({}, state, {loadingApi: 'started'});
    case actType.FINISH_LOAD_RUNTIME:
      return Object.assign({}, state, {loadingApi: 'finished', runtimeApi: action.payload});
    case actType.FAIL_LOAD_RUNTIME:
      return Object.assign({}, state, {loadingApi: 'failed'});
    default:
      return state;
  }
}

export default loadApi;
