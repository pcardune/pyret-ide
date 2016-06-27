import loadApi from '../../src/redux/reducer';
import * as actType from '../../src/redux/action-types';

describe("The reducer", () => {

  it("returns a state object", () => {
    expect(loadApi({}, "default")).toEqual(jasmine.any(Object));
  });

  describe("returns a state change", () => {
    var state;

    beforeEach(() => {
      state = {
        loadingApi: undefined,
        runtimeApi: undefined,
        error: undefined
      };
    });

    const start = {type: actType.START_LOAD_RUNTIME};
    const finish = {type: actType.FINISH_LOAD_RUNTIME, payload: "loadedRuntimeApi"};
    const fail = {type: actType.FAIL_LOAD_RUNTIME, payload: "reason"};

    it("for action type START_LOAD_RUNTIME", () => {
      var nextState = loadApi(state, start);
      expect(nextState.loadingApi).toEqual('started');
    });

    it("for action type FINISH_LOAD_RUNTIME", () => {
      var nextState = loadApi(state, finish);
      expect(nextState.loadingApi).toEqual('finished');
      expect(nextState.runtimeApi).toEqual(finish.payload);
    });

    it("for action type FAIL_LOAD_RUNTIME", () => {
      var nextState = loadApi(state, fail);
      expect(nextState.loadingApi).toEqual('failed');
      expect(nextState.error).toEqual(fail.payload);
    });
  });
});
