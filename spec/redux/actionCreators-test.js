import pyretReducer from '../../src/redux/reducer';
import * as actCreators from "../../src/redux/actionCreators";
import * as actType from '../../src/redux/action-types';
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';
import Immutable from 'immutable';

describe("The actionCreators'", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  var store;

  beforeEach(() => {
    store = mockStore({});
  });

  describe("configureIDE function", () => {
    var resolve, reject;

    beforeEach(() => {
      var runtimeApiLoader = () => new Promise(function(_resolve, _reject) {
        resolve = _resolve;
        reject = _reject;
      });
      store.dispatch(actCreators.configureIDE({
        codemirrorOptions: {mode: 'javascript'},
        runtimeApiLoader: runtimeApiLoader
      }));
    });

    describe("asynchronously dispatches the loadRuntimeApi function", () => {

      it("which dispatches a START_LOAD_RUNTIME action first", () => {
        expect(store.getActions()[0]).toEqual({type: 'START_LOAD_RUNTIME'});
      });

      it("and dispatches a FINISH_LOAD_RUNTIME after the runtime is loaded", (done) => {
        resolve('the runtime api');
        window.setTimeout(() => {
          expect(store.getActions()[2])
            .toEqual({type: 'FINISH_LOAD_RUNTIME', payload: 'the runtime api'});
          done();
        }, 0);
      });

      it("and dispatches a FAIL_LOAD_RUNTIME after the promise is rejected", (done) => {
        reject('some error');
        window.setTimeout(() => {
          expect(store.getActions()[2])
            .toEqual({type: 'FAIL_LOAD_RUNTIME', payload: 'some error'});
          done();
        }, 0);
      });
    });

    it("dispatches a CONFIGURE_CODEMIRROR action after loading runtime", () => {
      expect(store.getActions()[1]).toEqual({
        type: 'CONFIGURE_CODEMIRROR',
        payload: {mode: 'javascript'}
      });
    });
  });

  describe("REPL functions", () => {

    describe("changeREPLCode function", () => {
      it("dispatches a CHANGE_REPL_CODE action", () => {
        store.dispatch(actCreators.changeREPLCode('some code'));
        expect(store.getActions()[0])
          .toEqual({type: actType.CHANGE_REPL_CODE, payload: 'some code'});
      });
    });

    describe("recieveREPLResult function", () => {
      it("dispatches a RECEIVE_REPL_RESULT action", () => {
        store.dispatch(actCreators.recieveREPLResult('some result'));
        expect(store.getActions()[0])
          .toEqual({type: actType.RECEIVE_REPL_RESULT, payload: 'some result'});
      });
    });

    describe("changeSource function", () => {
      it("dispatches a CHANGE_SOURCE action", () => {
        store.dispatch(actCreators.changeSource('some code'));
        expect(store.getActions()[0])
          .toEqual({type: actType.CHANGE_SOURCE, payload: 'some code'});
      });

      describe("clearState function", () => {
        it("dispatches a CLEAR_STATE action", () => {
          store.dispatch(actCreators.clearState());
          expect(store.getActions()[0])
            .toEqual({type: actType.CLEAR_STATE});
        });
      });
    });
  });
  describe("run function,", () => {

    var parseResolve, parseReject, compileResolve, compileReject;
    var executeResolve, executeReject, store;
    var src = 'some source code';

    beforeEach(() => {

      let state = pyretReducer(undefined, {type: 'START_PARSE'});
      state = pyretReducer(state, {
        type: actType.FINISH_LOAD_RUNTIME,
        payload: {
          parse() {
            return new Promise((_resolve, _reject) => {
              parseResolve = _resolve;
              parseReject = _reject;
            });
          },
          compile() {
            return new Promise((_resolve, _reject) => {
              compileResolve = _resolve;
              compileReject = _reject;
            });
          },
          execute() {
            return new Promise((_resolve, _reject) => {
              executeResolve = _resolve;
              executeReject = _reject;
            });
          }
        }
      });

      store = mockStore(state);
      store.dispatch(actCreators.run(src));
    });

    it("throws an exception if the runtime has not been loaded", () => {
      store = mockStore(Immutable.Map());
      expect(() => store.dispatch(actCreators.run(src)))
        .toThrowError("Runtime has not been loaded, you can't run anything yet!");
    });

    it("dispatches a STORE_SOURCE action", () => {
      expect(store.getActions()[0]).toEqual(
        {type: 'STORE_SOURCE', payload: 'some source code'}
      );
    });

    describe("asynchronously dispatches the loadRuntimeApi function which", () => {

      it("dispatches a START_PARSE action", () => {
        expect(store.getActions()[1]).toEqual({type: 'START_PARSE', stage: 'parsing'});
      });

      it("dispatches a FINISH_PARSE action once the source code is parsed", (done) => {
        parseResolve('the ast');
        window.setTimeout(() => {
          expect(store.getActions()[2])
            .toEqual({type: 'FINISH_PARSE', payload: 'the ast'});
          done();
        }, 0);
      });

      it("dispatches a START_COMPILE action once the source code is parsed", (done) => {
        parseResolve('the src');
        window.setTimeout(() => {
          expect(store.getActions()[3])
            .toEqual({type: 'START_COMPILE', stage: 'compiling'});
          done();
        }, 0);
      });

      it("dispatches a FAIL_PARSE action once the first promise is rejected", (done) => {
        parseReject('some error');
        window.setTimeout(() => {
          expect(store.getActions()[2])
            .toEqual({type: 'FAIL_PARSE', payload: 'some error'});
          done();
        }, 0);
      });

      describe("and the compile function,", () => {

        beforeEach((done) => {
          parseResolve('the ast');
          window.setTimeout(done, 0);
        });

        it("dispatches a FINISH_COMPILE action once the ast is compiled", (done) => {
          compileResolve('the byte code');
          window.setTimeout(() => {
            expect(store.getActions()[4])
              .toEqual({type: 'FINISH_COMPILE', payload: 'the byte code'});
            done();
          }, 0);
        });

        it("dispatches a START_EXECUTE action once the ast is compiled", (done) => {
          compileResolve('the bytecode');
          window.setTimeout(() => {
            expect(store.getActions()[5])
              .toEqual({type: 'START_EXECUTE', stage: 'executing'});
            done();
          }, 0);
        });

        it("dispatches a FAIL_COMPILE action once the second promise is rejected",
           (done) => {
             compileReject('some error');
             window.setTimeout(() => {
               expect(store.getActions()[4])
                 .toEqual({type: 'FAIL_COMPILE', payload: 'some error'});
               done();
             }, 0);
           });

        describe("and the execute function", () => {

          beforeEach((done) => {
            compileResolve('the bytecode');
            window.setTimeout(done, 0);
          });

          it(`dispatches a FINISH_EXECUTE and STORE_EDITOR_RESULT
              action once the bytecode is executed`,
             (done) => {
               executeResolve('some result');
               window.setTimeout(() => {
                 expect(store.getActions()[6])
                   .toEqual({type: 'FINISH_EXECUTE', payload: 'some result'});
                 expect(store.getActions()[7])
                   .toEqual({type: 'STORE_EDITOR_RESULT', payload: 'some result'});

                 done();
               }, 0);
             });

          it("dispatches a FAIL_EXECUTE action once the third promise is rejected",
             (done) => {
               executeReject('some error');
               window.setTimeout(() => {
                 expect(store.getActions()[6])
                   .toEqual({type: 'FAIL_EXECUTE', payload: 'some error'});
                 done();
               }, 0);
             });
        });
      });
    });
  });

  describe("changeProgramName function", () => {
    it("dispatches a CHANGE_PROGRAM_NAME action", () => {
      store.dispatch(actCreators.changeProgramName("name"));
      expect(store.getActions()[0]).toEqual({type: actType.CHANGE_PROGRAM_NAME, payload: "name"});
    });
  });

  describe("expandMoreMenu function", () => {
    it("dispatches a EXPAND_MORE_MENU action", () => {
      store.dispatch(actCreators.expandMoreMenu());
      expect(store.getActions()[0]).toEqual({type: actType.EXPAND_MORE_MENU});
    });
  });

  describe("collapseMoreMenu function", () => {
    it("dispatches a COLLAPSE_MORE_MENU action", () => {
      store.dispatch(actCreators.collapseMoreMenu());
      expect(store.getActions()[0]).toEqual({type: actType.COLLAPSE_MORE_MENU});
    });
  });

  describe("incrementFontSize function", () => {
    it("dispatches a INCREMENT_FONT_SIZE action", () => {
      store.dispatch(actCreators.incrementFontSize());
      expect(store.getActions()[0]).toEqual({type: actType.INCREMENT_FONT_SIZE});
    });
  });

  describe("expandMoreMenu function", () => {
    it("dispatches a DECREMENT FONT SIZE action", () => {
      store.dispatch(actCreators.decrementFontSize());
      expect(store.getActions()[0]).toEqual({type: actType.DECREMENT_FONT_SIZE});
    });
  });

  describe("stop function", () => {
    it("dispatches a STOP_RUN action", () => {
      store.dispatch(actCreators.stop());
      expect(store.getActions()[0]).toEqual({type: actType.STOP_RUN});
    });
  });
});
