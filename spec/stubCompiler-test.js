import stubCompiler from '../src/dev-app/stubCompiler';

var noop = () => null;

describe("The stubCompiler's", () => {

  describe("parse function", () => {

    it("returns a Promise instance", () => {
      expect(stubCompiler.parse()).toEqual(jasmine.any(Promise));
    });

    it("returns a Promise that resolves to some fake ast", (done) => {
      var promise = stubCompiler.parse("(13+252)*10\n1+2");
      promise.then(ast => {
        expect(ast).toEqual([['13', '252', '+', '10', '*'], ['1', '2', '+']]);
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
      var promise = stubCompiler.compile([['13', '252', '+', '10', '*'],
                                          ['1', '2', '+']]);
      promise.then(bytecode => {
        expect(bytecode).toEqual([jasmine.any(Function), jasmine.any(Function)]);
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
      var promise = stubCompiler.execute([() => 'some result'], noop, noop, noop);
      promise.then(result => {
        expect(result).toBe('some result');
        done();
      });
    });
  });

  describe("all together now", () => {
    it("you can combine the parse, compile, and execute functions together", (done) => {
      stubCompiler
        .parse("3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 2")
        .then(
          ast => stubCompiler.compile(ast).then(
            bytecode => stubCompiler.execute(bytecode, noop, noop, noop).then(
              result => {
                expect(result).toEqual('3.03125');
                done();
              }
            )));
    });
  });
});
