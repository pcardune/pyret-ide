import React from 'react';
import Editor from './Editor';
import { Provider } from 'react-redux';
import running from '../redux/reducer';
import {createStore} from 'redux';

let store = createStore(running);

export default class PyretIDE extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Editor/>
      </Provider>
    );
  }
}
