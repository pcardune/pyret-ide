import stubCompiler from '../src/stubCompiler';

describe("The stubCompiler's", () => {

  describe("parse function", () => {

    it("returns a Promise instance", () => {
      expect(stubCompiler.parse()).toEqual(jasmine.any(Promise));
    });

    it("returns a Promise that resolves to some fake ast", (done) => {
      var promise = stubCompiler.parse("(13+252)*10");
      promise.then(ast => {
        expect(ast).toEqual(['13', '252', '+', '10', '*']);
        done();
      }).catch(error => {
        done.fail(error);
      });
    });
  });

  describe("compile function", () => {

    it("returns a Promise instance", () => {
      expect(stubCompiler.compile()).toEqual(jasmine.any(Promise));
    });

    it("returns a Promise that resolves to some fake bytecode", (done) => {
      var promise = stubCompiler.compile(['13', '252', '+', '10', '*']);
      promise.then(bytecode => {
        expect(bytecode).toEqual(jasmine.any(Function));
        done();
      }).catch(error => {
        done.fail(error);
      });
    });
  });

  describe("execute function", () => {

    it("returns a Promise instance", () => {
      expect(stubCompiler.execute()).toEqual(jasmine.any(Promise));
    });

    it("returns a Promise that resolves to some fake result", (done) => {
      var promise = stubCompiler.execute(() => 'some result');
      promise.then(result => {
        expect(result).toBe('some result');
        done();
      });
    });
  });

  describe("all together now", () => {
    it("you can combine the parse, compile, and execute functions together", (done) => {
      stubCompiler
        .parse("3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3")
        .then(stubCompiler.compile)
        .then(stubCompiler.execute)
        .then(result => {
          expect(result).toEqual(823.125);
          done();
        })
        .catch(error => done.fail(error));
    });
  });
});
