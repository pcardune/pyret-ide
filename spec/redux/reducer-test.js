import pyretReducer from '../../src/redux/reducer';
import * as actType from '../../src/redux/action-types';

describe("The reducer", () => {
  var state;

  beforeEach(() => {
    state = pyretReducer(undefined,{});
  });

  describe("handles loadApi calls", () => {

    it("and returns a state object", () => {
      expect(state.loadApi).toEqual(jasmine.any(Object));
    });

    describe("and returns a state change", () => {

      const start = {type: actType.START_LOAD_RUNTIME};
      const finish = {
        type: actType.FINISH_LOAD_RUNTIME,
        payload: "loadedRuntimeApi"
      };
      const fail = {type: actType.FAIL_LOAD_RUNTIME, payload: "reason"};

      it("for action type START_LOAD_RUNTIME", () => {
        var nextState = pyretReducer(state, start).loadApi;
        expect(nextState.stage).toEqual('started');
      });

      it("for action type FINISH_LOAD_RUNTIME", () => {
        var nextState = pyretReducer(state, finish).loadApi;
        expect(nextState.stage).toEqual('finished');
        expect(nextState.runtime).toEqual(finish.payload);
      });

      it("for action type FAIL_LOAD_RUNTIME", () => {
        var nextState = pyretReducer(state, fail).loadApi;
        expect(nextState.stage).toEqual('failed');
        expect(nextState.error).toEqual(fail.payload);
      });
    });
  });

  describe("handles runCode calls", () => {

    it("and returns a state object ", () => {
      expect(state.runCode).toEqual(jasmine.any(Object));
    });

    describe("and returns a state change", () => {

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
        expect(nextState.stage).toEqual('parsing');
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
        expect(nextState.stage).toEqual('compiling');
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
        expect(nextState.stage).toEqual('executing');
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

  describe("handles googleDrive calls", () => {

    it("and returns a state object ", () => {
      expect(state.googleDrive).toEqual(jasmine.any(Object));
    });

    describe("and returns a state change", () => {

      const startConnect = {type: actType.START_CONNECT_DRIVE};
      const finishConnect = {type: actType.FINISH_CONNECT_DRIVE, payload: "drive"};
      const failConnect = {type: actType.FAIL_CONNECT_DRIVE, payload: "reason"};

      const startSave = {type: actType.START_SAVE_DRIVE};
      const finishSave = {type: actType.FINISH_SAVE_DRIVE, payload: "save"};
      const failSave = {type: actType.FAIL_SAVE_DRIVE, payload: "reason"};

      const startShare = {type: actType.START_SHARE_DRIVE};
      const finishShare = {type: actType.FINISH_SHARE_DRIVE, payload: "share"};
      const failShare = {type: actType.FAIL_SHARE_DRIVE, payload: "reason"};

      it("for action type START_CONNECT_DRIVE", () => {
        var nextState = pyretReducer(state, startConnect).googleDrive;
        expect(nextState.stage).toEqual('started');
      });

      it("for action type FINISH_CONNECT_DRIVE", () => {
        var nextState = pyretReducer(state, finishConnect).googleDrive;
        expect(nextState.stage).toEqual('finished');
        expect(nextState.drive).toEqual('drive');
      });

      it("for action type FAIL_CONNECT_DRIVE", () => {
        var nextState = pyretReducer(state, failConnect).googleDrive;
        expect(nextState.stage).toEqual('failed');
        expect(nextState.error).toEqual('reason');
      });

      it("for action type START_SAVE_DRIVE", () => {
        var nextState = pyretReducer(state, startSave).googleDrive;
        expect(nextState.stage).toEqual('started');
      });

      it("for action type FINISH_SAVE_DRIVE", () => {
        var nextState = pyretReducer(state, finishSave).googleDrive;
        expect(nextState.stage).toEqual('finished');
        expect(nextState.save).toEqual('save');
      });

      it("for action type FAIL_SAVE_DRIVE", () => {
        var nextState = pyretReducer(state, failSave).googleDrive;
        expect(nextState.stage).toEqual('failed');
        expect(nextState.error).toEqual('reason');
      });

      it("for action type START_SHARE_DRIVE", () => {
        var nextState = pyretReducer(state, startShare).googleDrive;
        expect(nextState.stage).toEqual('started');
      });

      it("for action type FINISH_SHARE_DRIVE", () => {
        var nextState = pyretReducer(state, finishShare).googleDrive;
        expect(nextState.stage).toEqual('finished');
        expect(nextState.share).toEqual('share');
      });

      it("for action type FAIL_SHARE_DRIVE", () => {
        var nextState = pyretReducer(state, failShare).googleDrive;
        expect(nextState.stage).toEqual('failed');
        expect(nextState.error).toEqual('reason');
      });
    });
  });
});
