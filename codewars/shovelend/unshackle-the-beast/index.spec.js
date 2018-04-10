const { shallow } = require("enzyme");
const sinon = require("sinon");

describe(`BeastForm`, () => {

  let wrapper;

  before(() => {
    wrapper = shallow(
      <BeastForm />
    );
  });
  
  it(`should have a form with the id beastForm`, () => {
    Test.assertEquals(wrapper.find('#beastForm').exists(), true);
    Test.assertEquals(wrapper.find('#beastForm').first().type(), 'form');
  });
  
  it(`should have an input field to specify the beast to release`, () => {
    Test.assertEquals(wrapper.find('#beastToRelease').exists(), true);
    Test.assertEquals(wrapper.find('#beastToRelease').first().type(), 'input');
  });
  
  it(`should have a submit button`, () => {
    Test.assertEquals(wrapper.find('#submit').exists(), true);
    Test.assertEquals(wrapper.find('#submit').first().type(), 'button');
  });
  
  it(`onSubmit should call preventDefault`,() => {
    const spy = sinon.spy();
    const event = {preventDefault: spy};
    
    wrapper.find('#beastForm').simulate('submit', event);
    //Test.assertEquals(wrapper.state('success'), true);
    Test.assertEquals(spy.called, true);
    console.log(wrapper.find('#releasedBeast').first().props().children);
  });
  
  it("onSubmit calls the unshackle function on submit with the beastName", () => {
    const unshackleSpy = sinon.spy();
    unshackle = unshackleSpy;
    const event = {preventDefault: ()=>{}};
    wrapper.simulate('submit', event);
    Test.assertEquals(unshackleSpy.called, true);
    let args = sendSpy.getCall(0).args;
    Test.assertEquals(args[0].hasOwnProperty('wish'), true, 'object passed to send fn should have `beastToRelease` property');
  });

  
})