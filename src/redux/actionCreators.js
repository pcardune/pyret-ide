import * as actType from './action-types';
import * as selectors from './selectors';
import firebase from 'firebase';
import * as constants from './constants';

export function configureIDE({codemirrorOptions, runtimeApiLoader}) {
  return dispatch => {
    dispatch(loadRuntimeApi(runtimeApiLoader));
    dispatch({type: actType.CONFIGURE_CODEMIRROR, payload: codemirrorOptions});
  };
}

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

export function changeREPLCode(code) {
  return {
    type: actType.CHANGE_REPL_CODE,
    payload: code,
  };
}

export function recieveREPLResult(result) {
  return {
    type: actType.RECEIVE_REPL_RESULT,
    payload: result,
  };
}

export function changeSource(source) {
  localStorage.setItem(constants.LOCAL_STORAGE_SOURCE_KEY, source);
  return {
    type: actType.CHANGE_SOURCE,
    payload: source,
  };
}

export function clearState() {
  return {
    type: actType.CLEAR_STATE,
  };
}

export function run(src) {
  return (dispatch, getState) => {
    dispatch({type: actType.STORE_SOURCE, payload: src});
    dispatch({type: actType.START_PARSE, stage: 'parsing'});
    const state = getState();
    const runtimeApi = state.get('loadApi') && state.getIn(['loadApi', 'runtime']);
    if (!runtimeApi) {
      throw new Error("Runtime has not been loaded, you can't run anything yet!");
    }
    var stdout = (s) => dispatch(recieveREPLResult({type: 'stdout', value:s}));
    var stderr = (s) => dispatch(recieveREPLResult({type: 'stderr', value:s}));
    var onResult = (s) => dispatch(recieveREPLResult(s));
    runtimeApi
      .get('parse')(src)
      .then(ast => {
        if (!selectors.isRunning(getState())) {
          return;
        }
        dispatch({type: actType.FINISH_PARSE, payload: ast});
        dispatch({type: actType.START_COMPILE, stage: 'compiling'});
        runtimeApi
          .get('compile')(ast)
          .then(bytecode => {
            if (!selectors.isRunning(getState())) {
              return;
            }
            dispatch({type: actType.FINISH_COMPILE, payload: bytecode});
            dispatch({type: actType.START_EXECUTE, stage: 'executing'});
            runtimeApi
              .get('execute')(bytecode, stdout, stderr, onResult)
              .then(result => {
                if (!selectors.isRunning(getState())) {
                  return;
                }
                dispatch({
                  type: actType.FINISH_EXECUTE,
                  payload: result
                });
                dispatch({
                  type: actType.STORE_EDITOR_RESULT,
                  payload: result,
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

export function stop() {
  return {
    type: actType.STOP_RUN,
  };
}

function loadGoogleApi() {
  return new Promise((resolve, reject) => {
    var timeout = window.setTimeout(
      () => reject(new Error("timeout while loading Google Apis")),
      30000
    );
    var callbackName = "googleApiCallback" + Math.random();
    window[callbackName] = () => {
      delete window[callbackName];
      window.clearTimeout(timeout);
      resolve(gapi);
    };
    var scriptTag = document.createElement('script');
    scriptTag.src = "https://apis.google.com/js/client.js?onload=" + callbackName;
    scriptTag.type = "text/javascript";
    document.body.appendChild(scriptTag);
  });
}

export function connectGoogleDrive() {
  return dispatch => {
    dispatch({type: actType.START_CONNECT_DRIVE});
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/drive.file');
    firebase.auth()
            .signInWithPopup(provider)
            .then(result => {
              var token = result.credential.accessToken;
              var user = result.user;
              loadGoogleApi().then(() => {
                var tokenObject = {
                  access_token: result.credential.accessToken
                };
                gapi.client.load('drive', 'v3', () => {
                  // set the authentication token
                  gapi.auth.setToken(tokenObject);
                  dispatch({type: actType.FINISH_CONNECT_DRIVE});
                });
              });
            })
            .catch(error => {
              var errorCode = error.code;
              var errorMessage = error.message;
              var email = error.email;
              var credential = error.credential;
              dispatch({type: actType.FAIL_CONNECT_DRIVE,
                        payload: error});
            });

  };
}

export function saveGoogleDrive(file) {
  return dispatch => {
    dispatch({type: actType.START_SAVE_DRIVE});
    var promise = new Promise((resolve, reject) => {
      window.setTimeout(() => resolve(file), 1000);
      if (!file) {
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

export function signoutGoogleDrive() {
  return dispatch => {
    dispatch({type: actType.START_SIGNOUT_DRIVE});
    firebase.auth().signOut()
            .then(() => {
              dispatch({type: actType.FINISH_SIGNOUT_DRIVE});
            })
            .catch(reason => {
              dispatch({type: actType.FAIL_SIGNOUT_DRIVE, payload: reason});
            });
  };
}

export function expandMoreMenu() {
  return {
    type: actType.EXPAND_MORE_MENU,
  };
}

export function collapseMoreMenu() {
  return {
    type: actType.COLLAPSE_MORE_MENU,
  };
}

export function incrementFontSize() {
  return {
    type: actType.INCREMENT_FONT_SIZE,
  };
}

export function decrementFontSize() {
  return {
    type: actType.DECREMENT_FONT_SIZE,
  };
}
