import * as redux from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import pyretReducer from './reducer';

export default function createStore() {
  var middleware = [thunkMiddleware];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  return redux.createStore(
    pyretReducer,
    redux.applyMiddleware(...middleware)
  );
}
