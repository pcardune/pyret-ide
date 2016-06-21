import * as actions from "../src/redux/actionCreators";
import * as types from "../src/redux/action-types";
import running from "../src/redux/reducer";

describe("The action creator", function() {
  it("run should return an action object with payload true", function() {
    expect(actions.run().payload).toBeTruthy();
  });
  it("stop should return an action object with payload false", function() {
    expect(actions.stop().payload).toBeFalsy();
  });
});

describe("The reducer", function() {
  it("should return the initial state", function() {
    expect((running(undefined, {})).running).toBeFalsy();
  });
  it("should handle RUNNING", function() {
    expect(running(undefined, actions.run()).running).toBeTruthy();
    expect(running({running: true}, actions.stop()).running).toBeFalsy();
  });
});
