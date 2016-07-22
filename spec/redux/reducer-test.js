import Immutable from 'immutable';
import pyretReducer from '../../src/redux/reducer';
import * as actType from '../../src/redux/action-types';
import {makeHighlight as h} from '../../src/util';
import * as selectors from '../../src/redux/selectors';

describe("The reducer", () => {
  var state;

  beforeEach(() => {
    state = pyretReducer(undefined,{});
  });

  describe("handles loadApi calls", () => {

    it("and returns a state object", () => {
      expect(state.get('loadApi')).toEqual(jasmine.any(Object));
    });

    describe("and returns a state change for action type", () => {
      const start = {type: actType.START_LOAD_RUNTIME};
      const finish = {
        type: actType.FINISH_LOAD_RUNTIME,
        payload: 'loadedRuntimeApi'
      };
      const fail = {type: actType.FAIL_LOAD_RUNTIME, payload: 'reason'};

      it("START_LOAD_RUNTIME", () => {
        var nextState = pyretReducer(state, start).get('loadApi');
        expect(nextState.get('stage')).toEqual('started');
      });

      it("FINISH_LOAD_RUNTIME", () => {
        var nextState = pyretReducer(state, finish).get('loadApi');
        expect(nextState.get('stage')).toEqual('finished');
        expect(nextState.get('runtime')).toEqual(finish.payload);
      });

      it("FAIL_LOAD_RUNTIME", () => {
        var nextState = pyretReducer(state, fail).get('loadApi');
        expect(nextState.get('stage')).toEqual('failed');
        expect(nextState.get('error')).toEqual(fail.payload);
      });
    });
  });

  describe("merges highlights correctly", () => {
    it("registers and unregisters highlights", () => {
      let highlight = {
        type: actType.TURN_HIGHLIGHTS_ON,
        payload: {
          target: "definitions://",
          highlights: [
            h("blue", [0, 5, 0, 7])
          ]
        }
      };

      let nextState = pyretReducer(state, highlight);
      expect(selectors.getHighlightsFor(nextState, "definitions://"))
        .toEqual([h("blue", [0, 5, 0, 7])]);

      let unhighlight = {
        type: actType.TURN_HIGHLIGHTS_OFF,
        payload: {
          target: "definitions://",
          highlights: [
            h("blue", [0, 5, 0, 7])
          ]
        }
      };

      let unhighlightState = pyretReducer(nextState, unhighlight);
      expect(selectors.getHighlightsFor(unhighlightState, "definitions://"))
        .toEqual([]);
    });

  });

  describe("handles REPL calls and", ()=> {
    const changeREPLCode = {type: actType.CHANGE_REPL_CODE, payload: 'code'};
    const receiveREPLResult = {type: actType.RECEIVE_REPL_RESULT, payload: 'result'};
    const clearState = {type: actType.CLEAR_STATE};
    const getPrevREPLCode = {type: actType.GET_PREV_REPL_CODE};
    const getNextREPLCode = {type: actType.GET_NEXT_REPL_CODE};
    const clearREPLCode  = {type: actType.CLEAR_REPL_CODE};
    const displayNewREPLHistoryCode = {type: actType.DISPLAY_NEW_REPL_HISTORY_CODE};

    it("returns a state object ", () => {
      expect(state.get('REPL')).toEqual(jasmine.any(Object));
    });

    it("returns an object key history whose value is an empty Immutable List", () => {
      expect(state.getIn(['REPL', 'history'])).toEqual(Immutable.List());
    });


    describe("returns a state change for the", () => {

      it("code state for action CHANGE_REPL_CODE", () => {
        var nextState = pyretReducer(state, changeREPLCode).get('REPL');
        expect(nextState.get('code')).toEqual('code');
      });

      it(`first index of the Immutable List history for action RECEIVE_REPL_RESULT`,
         () => {
           var nextState = pyretReducer(state, changeREPLCode);
           nextState = pyretReducer(nextState, receiveREPLResult).get('REPL');
           expect(nextState.getIn(['history', 0, 'result'])).toEqual('result');
           expect(nextState.getIn(['history', 0, 'code'])).toEqual('code');
         });

      it("for action CLEAR_STATE", () => {
        var nextState = pyretReducer(state, changeREPLCode);
        nextState = pyretReducer(state, clearState);
        expect(nextState).toEqual(state);
      });

      it("for action GET_PREV_REPL_CODE", () => {
        var nextState = pyretReducer(state, changeREPLCode);
        nextState = pyretReducer(nextState, receiveREPLResult);
        nextState = pyretReducer(nextState, getPrevREPLCode).get('REPL');
        expect(nextState.get('codeIndex')).toEqual(1);
      });

      it("for action GET_NEXT_REPL_CODE", () => {
        var nextState = pyretReducer(state, changeREPLCode);
        nextState = pyretReducer(nextState, receiveREPLResult);
        nextState = pyretReducer(nextState, getPrevREPLCode);
        nextState = pyretReducer(nextState, getNextREPLCode).get('REPL');
        expect(nextState.get('codeIndex')).toEqual(0);
      });

      it("for action CLEAR_REPL_CODE", () => {
        var nextState = pyretReducer(state, changeREPLCode);
        nextState = pyretReducer(nextState, clearREPLCode).get('REPL');
        expect(nextState.get('code')).toEqual('');
      });

      it("for action DISPLAY_NEW_REPL_HISTORY_CODE", () => {
        var nextState = pyretReducer(state, changeREPLCode);
        nextState = pyretReducer(nextState, receiveREPLResult);
        nextState = pyretReducer(nextState, getPrevREPLCode);
        nextState = pyretReducer(nextState, displayNewREPLHistoryCode).get('REPL');
        expect(nextState.get('REPLHistoryCodeCopy')).toEqual('code');
      });
    });
  });

  describe("handles runCode calls", () => {

    it("and returns a state object ", () => {
      expect(state.get('runCode')).toEqual(jasmine.any(Object));
    });

    describe("and returns a state change for", () => {
      const storeSource = {type: actType.STORE_SOURCE, payload: 'source'};
      const startParse = {type: actType.START_PARSE};
      const finishParse = {type: actType.FINISH_PARSE, payload: 'ast'};
      const failParse = {type: actType.FAIL_PARSE, payload: 'reason'};

      const startCompile = {type: actType.START_COMPILE};
      const finishCompile = {type: actType.FINISH_COMPILE, payload: 'bytecode'};
      const failCompile = {type: actType.FAIL_COMPILE, payload: 'reason'};

      const startExecute = {type: actType.START_EXECUTE};
      const finishExecute = {type: actType.FINISH_EXECUTE, payload: 'result'};
      const failExecute = {type: actType.FAIL_EXECUTE, payload: 'reason'};
      const stopRun = {type: actType.STOP_RUN};
      const pauseRun = {type: actType.PAUSE_RUN};

      it("action type STORE_SOURCE", () => {
        var nextState = pyretReducer(state, storeSource).get('runCode');
        expect(nextState.get('source')).toEqual('source');
      });

      it("action type START_PARSE", () => {
        var nextState = pyretReducer(state, startParse).get('runCode');
        expect(nextState.get('stage')).toEqual('parsing');
      });

      it("action type FINISH_PARSE", () => {
        var nextState = pyretReducer(state, finishParse).get('runCode');
        expect(nextState.get('ast')).toEqual('ast');
      });

      it("action type FAIL_PARSE", () => {
        var nextState = pyretReducer(state, failParse).get('runCode');
        expect(nextState.get('error')).toEqual('reason');
      });

      it("action type START_COMPILE", () => {
        var nextState = pyretReducer(state, startCompile).get('runCode');
        expect(nextState.get('stage')).toEqual('compiling');
      });

      it("action type FINISH_COMPILE", () => {
        var nextState = pyretReducer(state, finishCompile).get('runCode');
        expect(nextState.get('bytecode')).toEqual('bytecode');
      });

      it("action type FAIL_COMPILE", () => {
        var nextState = pyretReducer(state, failCompile).get('runCode');
        expect(nextState.get('error')).toEqual('reason');
      });

      it("action type START_EXECUTE", () => {
        var nextState = pyretReducer(state, startExecute).get('runCode');
        expect(nextState.get('stage')).toEqual('executing');
      });

      it("action type FINISH_EXECUTE", () => {
        var nextState = pyretReducer(state, finishExecute).get('runCode');
        expect(nextState.get('result')).toEqual('result');
      });

      it("action type FAIL_EXECUTE", () => {
        var nextState = pyretReducer(state, failExecute).get('runCode');
        expect(nextState.get('error')).toEqual('reason');
      });

      it("action type STOP_RUN", () => {
        var nextState = pyretReducer(state, stopRun).get('runCode');
        expect(nextState.get('stage')).toEqual(null);
      });
      it("action type PAUSE_RUN", () => {
        var nextState = pyretReducer(state, pauseRun).get('runCode');
        expect(nextState.get('stage')).toEqual('pausing');
      });
    });
  });

  describe("handles googleDrive calls", () => {

    it("and returns a state object ", () => {
      expect(state.get('googleDrive')).toEqual(jasmine.any(Object));
    });

    describe("and returns a state change", () => {
      const startConnect = {type: actType.START_CONNECT_DRIVE};
      const finishConnect = {type: actType.FINISH_CONNECT_DRIVE, payload: 'drive'};
      const failConnect = {type: actType.FAIL_CONNECT_DRIVE, payload: 'reason'};

      const startSave = {type: actType.START_SAVE_DRIVE};
      const finishSave = {
        type: actType.FINISH_SAVE_DRIVE,
        payload: {fileId: 'some-file-id'}
      };
      const failSave = {type: actType.FAIL_SAVE_DRIVE, payload: 'reason'};


      const startOpen = {type: actType.START_OPEN_DRIVE};
      const finishOpen = {type: actType.FINISH_OPEN_DRIVE, payload: 'open'};
      const failOpen = {type: actType.FAIL_OPEN_DRIVE, payload: 'reason'};

      const startShare = {type: actType.START_SHARE_DRIVE};
      const finishShare = {type: actType.FINISH_SHARE_DRIVE, payload: 'share'};
      const failShare = {type: actType.FAIL_SHARE_DRIVE, payload: 'reason'};

      it("action type START_CONNECT_DRIVE", () => {
        var nextState = pyretReducer(state, startConnect).get('googleDrive');
        expect(nextState.get('stage')).toEqual('startedConnect');
      });

      it("action type FINISH_CONNECT_DRIVE", () => {
        var nextState = pyretReducer(state, finishConnect).get('googleDrive');
        expect(nextState.get('stage')).toEqual('finishedConnect');
        expect(nextState.get('drive')).toEqual('drive');
      });

      it("action type FAIL_CONNECT_DRIVE", () => {
        var nextState = pyretReducer(state, failConnect).get('googleDrive');
        expect(nextState.get('stage')).toEqual('failedConnect');
        expect(nextState.get('error')).toEqual('reason');
      });

      it("action type START_SAVE_DRIVE", () => {
        var nextState = pyretReducer(state, startSave).get('googleDrive');
        expect(nextState.get('stage')).toEqual('startedSave');
      });

      it("action type FINISH_SAVE_DRIVE", () => {
        var nextState = pyretReducer(state, finishSave).get('googleDrive');
        expect(nextState.get('stage')).toEqual('finishedSave');
        expect(nextState.get('fileId')).toEqual('some-file-id');
      });

      it("action type FAIL_SAVE_DRIVE", () => {
        var nextState = pyretReducer(state, failSave).get('googleDrive');
        expect(nextState.get('stage')).toEqual('failedSave');
        expect(nextState.get('error')).toEqual('reason');
      });

      it("action type START_OPEN_DRIVE", () => {
        var nextState = pyretReducer(state, startOpen).get('googleDrive');
        expect(nextState.get('stage')).toEqual('startedOpen');
      });

      it("action type FINISH_OPEN_DRIVE", () => {
        var nextState = pyretReducer(state, finishOpen).get('googleDrive');
        expect(nextState.get('stage')).toEqual('finishedOpen');
        expect(nextState.get('open')).toEqual('open');
      });

      it("action type FAIL_OPEN_DRIVE", () => {
        var nextState = pyretReducer(state, failOpen).get('googleDrive');
        expect(nextState.get('stage')).toEqual('failedOpen');
        expect(nextState.get('error')).toEqual('reason');
      });

      it("action type START_SHARE_DRIVE", () => {
        var nextState = pyretReducer(state, startShare).get('googleDrive');
        expect(nextState.get('stage')).toEqual('startedShare');
      });

      it("action type FINISH_SHARE_DRIVE", () => {
        var nextState = pyretReducer(state, finishShare).get('googleDrive');
        expect(nextState.get('stage')).toEqual('finishedShare');
        expect(nextState.get('share')).toEqual('share');
      });

      it("action type FAIL_SHARE_DRIVE", () => {
        var nextState = pyretReducer(state, failShare).get('googleDrive');
        expect(nextState.get('stage')).toEqual('failedShare');
        expect(nextState.get('error')).toEqual('reason');
      });

      describe("handles changeProgramName calls", () => {
        const changeProgramName = {type: actType.CHANGE_PROGRAM_NAME, payload: "name"};

        it("and returns a state change for name", () => {
          var nextState = pyretReducer(state, changeProgramName).get('googleDrive');
          expect(nextState.get('name')).toEqual("name");
        });
      });
    });

    describe("handles moreMenu calls", () => {
      const expandMoreMenu = {type: actType.EXPAND_MORE_MENU, expanded: true};
      const collapseMoreMenu = {type: actType.COLLAPSE_MORE_MENU, expanded: false};
      const incrementFontSize = {type: actType.INCREMENT_FONT_SIZE};
      const decrementFontSize = {type: actType.DECREMENT_FONT_SIZE};

      it("and returns a state object", () => {
        expect(state.get('moreMenu')).toEqual(jasmine.any(Object));
      });

      describe("and returns a state change for", () => {

        it("action EXPAND_MORE_MENU", () => {
          var nextState = pyretReducer(state, expandMoreMenu).get('moreMenu');
          expect(nextState.get('expanded')).toEqual(true);
        });

        it("action COLLAPSE_MORE_MENU", () => {
          var nextState = pyretReducer(state, collapseMoreMenu).get('moreMenu');
          expect(nextState.get('expanded')).toEqual(false);
        });

        it("action INCREMENT_FONT_SIZE", () => {
          var nextState = pyretReducer(state, incrementFontSize).get('moreMenu');
          expect(nextState.get('fontSize')).toEqual(16);
        });

        it("action DECREMENT_FONT_SIZE", () => {
          var nextState = pyretReducer(state, decrementFontSize).get('moreMenu');
          expect(nextState.get('fontSize')).toEqual(8);
        });
      });
    });

    describe("handles runDropdown calls", ()=> {
      const expand = {type: actType.EXPAND_RUN_DROPDOWN, expanded: true};
      const collapse = {type: actType.COLLAPSE_RUN_DROPDOWN, expanded: false};

      it("and returns a state object", () => {
        expect(state.get('runDropdown')).toEqual(jasmine.any(Object));
      });

      describe("and returns a state change for", () => {

        it("action EXPAND_RUN_DROPDOWN", () => {
          var nextState = pyretReducer(state, expand).get('runDropdown');
          expect(nextState.get('expanded')).toEqual(true);
        });

        it("action COLLAPSE_RUN_DROPDOWN", () => {
          var nextState = pyretReducer(state, collapse).get('runDropdown');
          expect(nextState.get('expanded')).toEqual(false);
        });
      });
    });
  });
});
