import * as redux from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import running from './reducer';

export default function createStore() {
  var middleware = [thunkMiddleware];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  return redux.createStore(
    running,
    redux.applyMiddleware(...middleware)
  );
}
