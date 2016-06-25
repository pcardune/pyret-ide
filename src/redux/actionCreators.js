import {RUNNING} from './action-types';
import * as actType from './action-types';

export function run() {
  return {
    type: RUNNING,
    payload: true
  };
}

/**
 * @param function runtimeApiLoader - a function that asynchronously
 *                                    loads a runtime api. It should return
 *                                    a promise that resolves to the loaded api.
 */
export function loadRuntimeApi(runtimeApiLoader) {
  return function(dispatch) {
    dispatch({type: actType.START_LOAD_RUNTIME});
    var promise = runtimeApiLoader();
    promise
      .then(loadedRuntimeApi => {
        dispatch({type: actType.FINISH_LOAD_RUNTIME, payload: loadedRuntimeApi});
      })
      .catch(reason => {
        dispatch({type: actType.FAIL_LOAD_RUNTIME, payload: reason});
      });
  };
}

export function stop() {
  return {
    type: RUNNING,
    payload: false
  };
}
