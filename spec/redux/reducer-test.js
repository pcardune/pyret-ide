import pyretReducer from '../../src/redux/reducer';
import * as actType from '../../src/redux/action-types';

describe("The reducer", () => {

  describe("handles loadApi calls", () => {

    it("and returns a state object", () => {
      var nextState = pyretReducer(undefined,"");
      expect(nextState).toEqual(jasmine.any(Object));
    });

    describe("and returns a state change", () => {
      var state;

      beforeEach(() => {
        state = {
          loadingApi: undefined,
          runtimeApi: undefined,
          errorApi: undefined,
          runtimeStage: undefined,
          ast: undefined,
          bytecode: undefined,
          result: undefined,
          errorRun: undefined,
          pausing: false
        };
      });

      const start = {type: actType.START_LOAD_RUNTIME};
      const finish = {type: actType.FINISH_LOAD_RUNTIME, payload: "loadedRuntimeApi"};
      const fail = {type: actType.FAIL_LOAD_RUNTIME, payload: "reason"};

      it("for action type START_LOAD_RUNTIME", () => {
        var nextState = pyretReducer(state, start).loadApi;
        expect(nextState.loadingApi).toEqual('starting');
      });

      it("for action type FINISH_LOAD_RUNTIME", () => {
        var nextState = pyretReducer(state, finish).loadApi;
        expect(nextState.loadingApi).toEqual('finished');
        expect(nextState.runtimeApi).toEqual(finish.payload);
      });

      it("for action type FAIL_LOAD_RUNTIME", () => {
        var nextState = pyretReducer(state, fail).loadApi;
        expect(nextState.loadingApi).toEqual('failed');
        expect(nextState.error).toEqual(fail.payload);
      });
    });
  });

  describe("handles runCode calls", () => {

    it("and returns a state object ", () => {
      var nextState = pyretReducer(undefined,"");
      expect(nextState).toEqual(jasmine.any(Object));
    });

    describe("and returns a state change", () => {
      var state;

      beforeEach(() => {
        state = {
          loadingApi: undefined,
          runtimeApi: undefined,
          errorApi: undefined,
          runtimeStage: undefined,
          ast: undefined,
          bytecode: undefined,
          result: undefined,
          errorRun: undefined,
          pausing: false
        };
      });

      const startParse = {type: actType.START_PARSE};
      const finishParse = {type: actType.FINISH_PARSE, payload: "ast"};
      const failParse = {type: actType.FAIL_PARSE, payload: "reason"};

      const startCompile = {type: actType.START_COMPILE};
      const finishCompile = {type: actType.FINISH_COMPILE, payload: "bytecode"};
      const failCompile = {type: actType.FAIL_COMPILE, payload: "reason"};

      const startExecute = {type: actType.START_EXECUTE};
      const finishExecute = {type: actType.FINISH_EXECUTE, payload: "result"};
      const failExecute = {type: actType.FAIL_EXECUTE, payload: "reason"};

      it("for action type START_PARSE", () => {
        var nextState = pyretReducer(state, startParse).runCode;
        expect(nextState.runtimeStage).toEqual('parsing');
      });

      it("for action type FINISH_PARSE", () => {
        var nextState = pyretReducer(state, finishParse).runCode;
        expect(nextState.ast).toEqual('ast');
      });

      it("for action type FAIL_PARSE", () => {
        var nextState = pyretReducer(state, failParse).runCode;
        expect(nextState.error).toEqual('reason');
      });

      it("for action type START_COMPILE", () => {
        var nextState = pyretReducer(state, startCompile).runCode;
        expect(nextState.runtimeStage).toEqual('compiling');
      });

      it("for action type FINISH_COMPILE", () => {
        var nextState = pyretReducer(state, finishCompile).runCode;
        expect(nextState.bytecode).toEqual('bytecode');
      });

      it("for action type FAIL_COMPILE", () => {
        var nextState = pyretReducer(state, failCompile).runCode;
        expect(nextState.error).toEqual('reason');
      });

      it("for action type START_EXECUTE", () => {
        var nextState = pyretReducer(state, startExecute).runCode;
        expect(nextState.runtimeStage).toEqual('executing');
      });

      it("for action type FINISH_EXECUTE", () => {
        var nextState = pyretReducer(state, finishExecute).runCode;
        expect(nextState.result).toEqual('result');
      });

      it("for action type FAIL_EXECUTE", () => {
        var nextState = pyretReducer(state, failExecute).runCode;
        expect(nextState.error).toEqual('reason');
      });
    });
  });
});
