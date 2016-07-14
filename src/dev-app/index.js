import PyretIDE from '../pyret-ide';
import stubCompiler from '../stubCompiler';

var runtimeApiLoader = function() {
  return new Promise(function(resolve) {
    window.setTimeout(() => resolve(stubCompiler), 3000);
  });
};

var app = document.createElement('div');
document.body.appendChild(app);
PyretIDE.init({
  rootEl: app,
  runtimeApiLoader,
});
