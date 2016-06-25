import "babel-polyfill";

export default {
  
  parse() {
    return new Promise((resolve) => {
      window.setTimeout(() => {
        resolve('some fake ast');
      }, 1000);  
    });
  },
  
  compile() {
    return new Promise((resolve) => {
      window.setTimeout(() => {
        resolve('some fake bytecode');
      }, 1000);  
    });
  },
  
  execute() {
    return new Promise((resolve) => {
      window.setTimeout(() => {
        resolve('some fake result');
      }, 1000);  
    });
  }
};
