import * as actType from './action-types';

/**
 * @param function runtimeApiLoader - a function that asynchronously
 *                                    loads a runtime api. It should return
 *                                    a promise that resolves to the loaded api.
 */
export function loadRuntimeApi(runtimeApiLoader) {
  return dispatch => {
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

export function run(src) {
  return (dispatch, getState) => {
    dispatch({type: actType.START_PARSE, stage: 'parsing'});
    var runtimeApi = getState().runtimeApi;
    runtimeApi
      .parse(src)
      .then(ast => {
        dispatch({type: actType.FINISH_PARSE, payload: ast});
        dispatch({type: actType.START_COMPILE, stage: 'compiling'});
        runtimeApi
          .compile(ast)
          .then(bytecode => {
            dispatch({type: actType.FINISH_COMPILE, payload: bytecode});
            dispatch({type: actType.START_EXECUTE, stage: 'executing'});
            runtimeApi
              .execute(bytecode)
              .then(result => {
                dispatch({
                  type: actType.FINISH_EXECUTE,
                  payload: result
                });
              })
              .catch(reason => {
                dispatch({type: actType.FAIL_EXECUTE, payload: reason});
              });
          })
          .catch(reason => {
            dispatch({type: actType.FAIL_COMPILE, payload: reason});
          });
      })
      .catch(reason => {
        dispatch({type: actType.FAIL_PARSE, payload: reason});
      });
  };
}


//TODO: implement the stop action creator synchronously
export function stop() {
  return {
    type: RUN,
    payload: false
  };
}
