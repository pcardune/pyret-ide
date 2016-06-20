import {RUNNING} from './action-types';

export function run() {
  return {
    type: RUNNING,
    payload: true
  };
}

export function stop() {
  return {
    type: RUNNING,
    payload: false
  };
}
