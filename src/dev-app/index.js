import PyretIDE from '../pyret-ide';
import stubCompiler from './stubCompiler';
import 'codemirror/mode/javascript/javascript';

var runtimeApiLoader = function() {
  return new Promise(function(resolve) {
    window.setTimeout(() => resolve(stubCompiler), 3000);
  });
};

var app = document.createElement('div');
var firebaseConfig = {
  apiKey: "AIzaSyBP5OkygUw0RS4q8YaZNsasIHz9xLOgkWk",
  authDomain: "pyret-ide-d8e06.firebaseapp.com",
  databaseURL: "https://pyret-ide-d8e06.firebaseio.com",
  storageBucket: "",
};

document.body.appendChild(app);
PyretIDE.init({
  rootEl: app,
  runtimeApiLoader,
  codemirrorOptions: {
    mode: 'javascript',
  },
  firebaseConfig,
});
