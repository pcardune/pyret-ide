import pyretReducer from '../../src/redux/reducer';
import {loadRuntimeApi, run} from "../../src/redux/actionCreators";
import * as actType from '../../src/redux/action-types';
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';

describe("The actionCreators'", () => {

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  describe("loadRuntimeApi function", () => {
    var resolve, reject, store;

    beforeEach(() => {
      var runtimeApiLoader = function() {
        return new Promise(function(_resolve, _reject) {
          resolve = _resolve;
          reject = _reject;
        });
      };
      store = mockStore({}); //initial state of the store
      store.dispatch(loadRuntimeApi(runtimeApiLoader));
    });

    it("dispatches a START_LOAD_RUNTIME action first", () => {
      expect(store.getActions()[0]).toEqual({type: "START_LOAD_RUNTIME"});
    });

    it("dispatches a FINISH_LOAD_RUNTIME after the runtime is loaded", (done) => {
      resolve("the runtime api");
      window.setTimeout(() => {
        expect(store.getActions()[1])
          .toEqual({type: "FINISH_LOAD_RUNTIME", payload: "the runtime api"});
        done();
      }, 0);
    });

    it("dispatches a FAIL_LOAD_RUNTIME after the promise is rejected", (done) => {
      reject("some error");
      window.setTimeout(() => {
        expect(store.getActions()[1])
          .toEqual({type: "FAIL_LOAD_RUNTIME", payload: "some error"});
        done();
      }, 0);
    });
  });

  describe("run function,", () => {

    var parseResolve, parseReject, compileResolve, compileReject;
    var executeResolve, executeReject, store;
    var src = "some source code";

    beforeEach(() => {

      let state = pyretReducer(undefined, {});
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
      store.dispatch(run(src));
    });

    it("It throws an exception if the runtime has not been loaded", () => {
      store = mockStore({});
      expect(() => store.dispatch(run(src)))
        .toThrowError("Runtime has not been loaded, you can't run anything yet!");
    });

    it("dispatches a START_PARSE action first", () => {
      expect(store.getActions()[0]).toEqual({type: "START_PARSE", stage: 'parsing'});
    });

    describe("after calling the parse function,", () => {

      it("dispatches a FINISH_PARSE action once the source code is parsed", (done) => {
        parseResolve("the ast");
        window.setTimeout(() => {
          expect(store.getActions()[1])
            .toEqual({type: "FINISH_PARSE", payload: "the ast"});
          done();
        }, 0);
      });

      it("dispatches a START_COMPILE action once the source code is parsed", (done) => {
        parseResolve("the src");
        window.setTimeout(() => {
          expect(store.getActions()[2])
            .toEqual({type: "START_COMPILE", stage: 'compiling'});
          done();
        }, 0);
      });

      it("dispatches a FAIL_PARSE action once the first promise is rejected", (done) => {
        parseReject("some error");
        window.setTimeout(() => {
          expect(store.getActions()[1])
            .toEqual({type: "FAIL_PARSE", payload: "some error"});
          done();
        }, 0);
      });

      describe("and the compile function,", () => {

        beforeEach((done) => {
          parseResolve("the ast");
          window.setTimeout(done, 0);
        });

        it("dispatches a FINISH_COMPILE action once the ast is compiled", (done) => {
          compileResolve("the byte code");
          window.setTimeout(() => {
            expect(store.getActions()[3])
              .toEqual({type: "FINISH_COMPILE", payload: 'the byte code'});
            done();
          }, 0);
        });

        it("dispatches a START_EXECUTE action once the ast is compiled", (done) => {
          compileResolve("the bytecode");
          window.setTimeout(() => {
            expect(store.getActions()[4])
              .toEqual({type: "START_EXECUTE", stage: 'executing'});
            done();
          }, 0);
        });

        it("dispatches a FAIL_COMPILE action once the second promise is rejected",
           (done) => {
             compileReject("some error");
             window.setTimeout(() => {
               expect(store.getActions()[3])
                 .toEqual({type: "FAIL_COMPILE", payload: "some error"});
               done();
             }, 0);
           });

        describe("and the execute function,", () => {

          beforeEach((done) => {
            compileResolve("the bytecode");
            window.setTimeout(done, 0);
          });

          it("dispatches a FINISH_EXECUTE action once the bytecode is executed",
             (done) => {
               executeResolve("some result");
               window.setTimeout(() => {
                 expect(store.getActions()[5])
                   .toEqual({type: "FINISH_EXECUTE", payload: "some result"});
                 done();
               }, 0);
             });

          it("dispatches a FAIL_EXECUTE action once the third promise is rejected",
             (done) => {
               executeReject("some error");
               window.setTimeout(() => {
                 expect(store.getActions()[5])
                   .toEqual({type: "FAIL_EXECUTE", payload: "some error"});
                 done();
               }, 0);
             });
        });
      });
    });
  });
});
