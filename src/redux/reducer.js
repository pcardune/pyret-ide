import {RUNNING} from './action-types'; 

const intialState = {running: false};

export default function running(state=intialState, action) {
  switch (action.type) {
    case RUNNING:
      return Object.assign({}, state, {running: action.payload});
    default:
      return state;
  }
}
