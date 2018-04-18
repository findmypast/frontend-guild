const { shallow, mount } = require("enzyme");
const sinon = require("sinon");

describe("Component shallow tests", () => {
  let comp;

  before(() => {
    comp = shallow(<RunTimer />);
  });

  it("has a `componentWillMount` function", () => {
    Test.assertEquals(
      comp.instance().componentWillMount.name,
      "componentWillMount"
    );
  });

  it("has a `componentDidMount` function", () => {
    Test.assertEquals(
      comp.instance().componentDidMount.name,
      "componentDidMount"
    );
  });

  it("has a `componentWillUnmount` function", () => {
    Test.assertEquals(
      comp.instance().componentWillUnmount.name,
      "componentWillUnmount"
    );
  });

  it("has an initial count of 0", () => {
    Test.assertEquals(comp.state("count"), 0);
  });
});

describe("Component mount tests", () => {
  let comp;

  before(() => {
    comp = mount(<RunTimer />);
  });

  it("creates a timer and stores a reference to it in the state as timerId", () => {
    Test.assertNotEquals(comp.state("timerId"), undefined);
  });

  it("has a timer with interval of 1000ms", () => {
    Test.assertEquals(comp.state("timerId")._idleTimeout, 1000);
  });

  it("sets up timer in componentWillMount", () => {
    let spy = sinon.spy(global, "setInterval");
    comp.instance().componentWillMount();
    Test.assertEquals(spy.called, true);
  });

  it("cancels the timer in componentWillUnmount", () => {
    let spy = sinon.spy(global, "clearInterval");
    comp.unmount();
    Test.assertEquals(spy.called, true);
  });

  it("fetches data in componentDidMount", done => {
    let spy = {
      called: false
    };
    fetch = async () => {
      spy.called = true;
      return "some stats";
    };
    // let spy = sinon.spy(fetch);
    comp.instance().componentDidMount();
    // setTimeout(function () {
    Test.assertEquals(
      spy.called,
      true,
      "fetch() should be called in componentDidMount"
    );
    //  done();
    // }, 0);
  });

  it("fetches some data in componentDidMount", () => {
    fetch().then(() => {
      Test.assertEquals(
        comp.state("timedStats"),
        "some stats",
        "state.timedStats should hold the response"
      );
    });
  });
});