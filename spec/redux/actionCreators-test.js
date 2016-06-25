import {loadRuntimeApi} from '../../src/redux/actionCreators';

describe("the actionCreators's", () => {
  describe("loadRuntimeApi function", () => {
    it("returns a function", () => {
      expect(loadRuntimeApi()).toEqual(jasmine.any(Function));
    });

    describe("return function", () => {
      var dispatch, internalFunction, resolve, reject;
      beforeEach(() => {
        var runtimeApiLoader = function() {
          return new Promise(function(_resolve, _reject) {
            resolve = _resolve;
            reject = _reject;
          });
        };
        internalFunction = loadRuntimeApi(runtimeApiLoader);
        dispatch = jasmine.createSpy('dispatch');
        internalFunction(dispatch);
      });

      it("dispatches a START_LOAD_RUNTIME action first", () => {
        expect(dispatch.calls.count()).toEqual(1);
        expect(dispatch.calls.first().args).toEqual([{type: 'START_LOAD_RUNTIME'}]);
      });

      it("dispatches a FINISH_LOAD_RUNTIME after the runtime was loaded", (done) => {
        resolve("the runtime api");
        window.setTimeout(() => {
          expect(dispatch.calls.count()).toEqual(2);
          expect(dispatch.calls.mostRecent().args)
            .toEqual([{type: 'FINISH_LOAD_RUNTIME', payload: "the runtime api"}]);
          done();
        }, 0);
      });

      it("dispatches a FAIL_LOAD_RUNTIME after the promise rejected", (done) => {
        reject("some error");
        window.setTimeout(() => {
          expect(dispatch.calls.count()).toEqual(2);
          expect(dispatch.calls.mostRecent().args)
            .toEqual([{type: 'FAIL_LOAD_RUNTIME', payload: "some error"}]);
          done();
        }, 0);
      });

    });
  });
});
