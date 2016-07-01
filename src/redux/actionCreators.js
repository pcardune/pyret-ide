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
    const state = getState();
    const runtimeApi = state.loadApi && state.loadApi.runtime;
    if (!runtimeApi) {
      throw new Error("Runtime has not been loaded, you can't run anything yet!");
    }
    runtimeApi
      .parse(src)
      .then(ast => {
        if (!getState().runCode.stage) {
          return;
        }
        dispatch({type: actType.FINISH_PARSE, payload: ast});
        dispatch({type: actType.START_COMPILE, stage: 'compiling'});
        runtimeApi
          .compile(ast)
          .then(bytecode => {
            if (!getState().runCode.stage) {
              return;
            }
            dispatch({type: actType.FINISH_COMPILE, payload: bytecode});
            dispatch({type: actType.START_EXECUTE, stage: 'executing'});
            runtimeApi
              .execute(bytecode)
              .then(result => {
                if (!getState().runCode.stage) {
                  return;
                }
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

export function changeSource(source) {
  return {
    type: actType.CHANGE_SOURCE,
    payload: source,
  };
}

export function stop() {
  return {
    type: actType.STOP_RUN,
  };
}

export function connectGoogleDrive() {
  return dispatch => {
    dispatch({type: actType.START_CONNECT_DRIVE});
    var promise = new Promise((resolve, reject) => {
      var googleDrive = "Google Drive";
      window.setTimeout(() => resolve(googleDrive), 1000);
      if (!googleDrive) {
        reject(new Error("Google Drive not connected"));
      }
    });
    promise
      .then(drive => {
        dispatch({type: actType.FINISH_CONNECT_DRIVE, payload: drive});
      })
      .catch(reason => {
        dispatch({type: actType.FAIL_CONNECT_DRIVE, payload: reason});
      });
  };
}

export function saveGoogleDrive() {
  return dispatch => {
    dispatch({type: actType.START_SAVE_DRIVE});
    var promise = new Promise((resolve, reject) => {
      var savedFile = "Saved file";
      window.setTimeout(() => resolve(savedFile), 1000);
      if (!savedFile) {
        reject(new Error("File not saved"));
      }
    });
    promise
      .then(file => {
        dispatch({type: actType.FINISH_SAVE_DRIVE, payload: file});
      })
      .catch(reason => {
        dispatch({type: actType.FAIL_SAVE_DRIVE, payload: reason});
      });
  };
}

export function shareGoogleDrive() {
  return dispatch => {
    dispatch({type: actType.START_SHARE_DRIVE});
    var promise = new Promise((resolve, reject) => {
      var sharedFile = "Shared file";
      window.setTimeout(() => resolve(sharedFile), 1000);
      if (!sharedFile) {
        reject(new Error("File not shared"));
      }
    });
    promise
      .then(link => {
        dispatch({type: actType.FINISH_SHARE_DRIVE, payload: link});
      })
      .catch(reason => {
        dispatch({type: actType.FAIL_SHARE_DRIVE, payload: reason});
      });
  };
}
