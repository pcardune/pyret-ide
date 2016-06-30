import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';

import PyretIDE from '../components/PyretIDE';
import createStore from '../redux/createStore';
import reducer from '../redux/reducer';
import {loadRuntimeApi} from '../redux/actionCreators';
import stubCompiler from '../stubCompiler';

const store = createStore(reducer, {});

var runtimeApiLoader = function() {
  return new Promise(function(resolve) {
    window.setTimeout(() => resolve(stubCompiler), 3000);
  });
};
store.dispatch(loadRuntimeApi(runtimeApiLoader));

var app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(
  <Provider store={store}>
    <PyretIDE/>
  </Provider>,
  app
);
