import stubCompiler from '../src/stubCompiler';

describe("The stubCompiler's", () => {
  
  describe("parse function", () => {
  
    it("returns a Promise instance", () => {
      expect(stubCompiler.parse()).toEqual(jasmine.any(Promise)); 
    });
    
    it("returns a Promise that resolves to some fake ast", (done) => {
      var promise = stubCompiler.parse();
      promise.then(ast => {
        expect(ast).toBe('some fake ast');
        done();
      });
    });
  });

  describe("compile function", () => {
    
    it("returns a Promise instance", () => {
      expect(stubCompiler.compile()).toEqual(jasmine.any(Promise)); 
    });
    
    it("returns a Promise that resolves to some fake bytecode", (done) => {
      var promise = stubCompiler.compile();
      promise.then(bytecode => {
        expect(bytecode).toBe('some fake bytecode');
        done();
      });
    });
  });
  
  describe("execute function", () => {
    
    it("returns a Promise instance", () => {
      expect(stubCompiler.execute()).toEqual(jasmine.any(Promise)); 
    });
    
    it("returns a Promise that resolves to some fake result", (done) => {
      var promise = stubCompiler.execute();
      promise.then(result => {
        expect(result).toBe('some fake result');
        done();
      });
    });
  });
});
