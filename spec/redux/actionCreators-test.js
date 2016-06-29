import {loadRuntimeApi, run} from "../../src/redux/actionCreators";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';

describe("The actionCreators'", () => {

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  describe("loadRuntimeApi function", () => {
    it("returns a function", () => {
      expect(loadRuntimeApi()).toEqual(jasmine.any(Function));
    });

    describe("return function", () => {
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

      it("dispatches a FINISH_LOAD_RUNTIME after the runtime was loaded", (done) => {
        resolve("the runtime api");
        window.setTimeout(() => {
          expect(store.getActions()[1])
            .toEqual({type: "FINISH_LOAD_RUNTIME", payload: "the runtime api"});
          done();
        }, 0);
      });

      it("dispatches a FAIL_LOAD_RUNTIME after the promise rejected", (done) => {
        reject("some error");
        window.setTimeout(() => {
          expect(store.getActions()[1])
            .toEqual({type: "FAIL_LOAD_RUNTIME", payload: "some error"});
          done();
        }, 0);
      });
    });
  });
});
