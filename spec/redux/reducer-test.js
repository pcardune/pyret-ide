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

  describe("handles moreMenu calls", ()=> {

    const expandMoreMenu = {type: actType.EXPAND_MORE_MENU, expanded: true};
    const collapseMoreMenu = {type: actType.COLLAPSE_MORE_MENU, expanded: false};
    const incrementFontSize = {type: actType.INCREMENT_FONT_SIZE};
    const decrementFontSize = {type: actType.DECREMENT_FONT_SIZE};

    it("and returns a state object ", () => {
      expect(state.moreMenu).toEqual(jasmine.any(Object));
    });

    describe("and returns a state change", () => {

      it("for action EXPAND_MORE_MENU", () => {
        var nextState = pyretReducer(state, expandMoreMenu).moreMenu;
        expect(nextState.expanded).toEqual(true);
      });

      it("for action COLLAPSE_MORE_MENU", () => {
        var nextState = pyretReducer(state, collapseMoreMenu).moreMenu;
        expect(nextState.expanded).toEqual(false);
      });

      it("for action INCREMENT_FONT_SIZE", () => {
        var nextState = pyretReducer(state, incrementFontSize).moreMenu;
        expect(nextState.fontSize).toEqual(16);
      });

      it("for action DECREMENT_FONT_SIZE", () => {
        var nextState = pyretReducer(state, decrementFontSize).moreMenu;
        expect(nextState.fontSize).toEqual(8);
      });
    });
  });

  describe("handles REPL calls", ()=> {

    const changeREPLCode = {type: actType.CHANGE_REPL_CODE, payload: "code"};
    const receiveREPLResult = {type: actType.RECEIVE_REPL_RESULT, payload: "result"};

    it("and returns a state object ", () => {
      expect(state.REPL).toEqual(jasmine.any(Object));
    });

    it("and returns an object key history whose value is an array", () => {
      expect(state.REPL.history).toEqual(jasmine.any(Array));
    });

    describe("and returns a state change", () => {

      it("for action CHANGE_REPL_CODE", () => {
        var nextState = pyretReducer(state, changeREPLCode).REPL;
        expect(nextState.code).toEqual("code");
      });

      it(`for the first index of the array history after RECEIVE_REPL_RESULT
          is dispatched`, () => {
        var nextState = pyretReducer(state, receiveREPLResult).REPL;
        expect(nextState.history[0].result).toEqual("result");
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
        expect(nextState.stage).toEqual('startedConnect');
      });

      it("for action type FINISH_CONNECT_DRIVE", () => {
        var nextState = pyretReducer(state, finishConnect).googleDrive;
        expect(nextState.stage).toEqual('finishedConnect');
        expect(nextState.drive).toEqual('drive');
      });

      it("for action type FAIL_CONNECT_DRIVE", () => {
        var nextState = pyretReducer(state, failConnect).googleDrive;
        expect(nextState.stage).toEqual('failedConnect');
        expect(nextState.error).toEqual('reason');
      });

      it("for action type START_SAVE_DRIVE", () => {
        var nextState = pyretReducer(state, startSave).googleDrive;
        expect(nextState.stage).toEqual('startedSave');
      });

      it("for action type FINISH_SAVE_DRIVE", () => {
        var nextState = pyretReducer(state, finishSave).googleDrive;
        expect(nextState.stage).toEqual('finishedSave');
        expect(nextState.save).toEqual('save');
      });

      it("for action type FAIL_SAVE_DRIVE", () => {
        var nextState = pyretReducer(state, failSave).googleDrive;
        expect(nextState.stage).toEqual('failedSave');
        expect(nextState.error).toEqual('reason');
      });

      it("for action type START_SHARE_DRIVE", () => {
        var nextState = pyretReducer(state, startShare).googleDrive;
        expect(nextState.stage).toEqual('startedShare');
      });

      it("for action type FINISH_SHARE_DRIVE", () => {
        var nextState = pyretReducer(state, finishShare).googleDrive;
        expect(nextState.stage).toEqual('finishedShare');
        expect(nextState.share).toEqual('share');
      });

      it("for action type FAIL_SHARE_DRIVE", () => {
        var nextState = pyretReducer(state, failShare).googleDrive;
        expect(nextState.stage).toEqual('failedShare');
        expect(nextState.error).toEqual('reason');
      });
    });
  });
});
