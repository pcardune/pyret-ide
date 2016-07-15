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
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
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
