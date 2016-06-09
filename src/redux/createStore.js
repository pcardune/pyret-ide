import * as redux from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default function createStore(reducer, initialState) {
  var middleware = [thunkMiddleware];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  return redux.createStore(
    reducer,
    initialState,
    redux.applyMiddleware(...middleware)
  );
}
