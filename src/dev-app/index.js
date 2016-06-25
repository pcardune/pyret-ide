import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';

import PyretIDE from '../components/PyretIDE';
import createStore from '../redux/createStore';
import reducer from '../redux/reducer';

const store = createStore(reducer, {});

var app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(
  <Provider store={store}>
    <PyretIDE/>
  </Provider>,
  app
);
