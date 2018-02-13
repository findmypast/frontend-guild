const ShallowRenderer = require("react-test-renderer/shallow");

function executeRender(jsx) {
  const renderer = new ShallowRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
}

// const enzyme = require('enzyme');

describe("Counter", () => {
  it("shows 0 as the inital counter value", () => {
    //     const wrapper = enzyme.mount(<Counter />)
    const wrapper = executeRender(<Counter />);
    expect(wrapper.find("#counter")).to.equal(0);
  });
});
