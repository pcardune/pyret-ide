import * as actions from '../src/redux/actionCreators';
import * as types from '../src/redux/action-types';
import running from '../src/redux/reducer';

describe('The action creator', function() {
  it('run should return return a object w/action.payload === true', function() {
    var expectedAction = {
      type: types.RUNNING,
      payload: true
    };
    expect(actions.run()).toEqual(expectedAction);
  });
  it('run should return return a object w/action.payload === false', function() {
    var expectedAction = {
      type: types.RUNNING,
      payload: false
    };
    expect(actions.stop()).toEqual(expectedAction);
  });
});


describe('The reducer', function() {
  it('should return the initial state', function() {
    expect(running(undefined, {})).toEqual({running: false});
  });
  it('should handle RUNNING', function() {
    expect(running(undefined, actions.run())).toEqual({running: true});
    expect(running({running: true}, actions.stop())).toEqual({running: false});
  });
});
