const { shallow } = require('enzyme');

describe('Default State', () => {
  const wrapper = shallow(<States />);

  it('It has a state called united', () => {
    Test.assertNotEquals(wrapper.state('united'), null);
  });

  it("It has a state 'united' with a value of false", () => {
    Test.assertEquals(wrapper.state('united'), false);
  });
});

describe('Changing of state', () => {
  const wrapper = shallow(<States />);

  it("Components United state is changed to true when 'unite' function is called", () => {
    wrapper.instance().unite();
    Test.assertEquals(wrapper.state('united'), true);
  });
});

describe('State based render', () => {
  const wrapper = shallow(<States />);

  it("Renders text 'Make America code again' if state.united is false", () => {
    Test.assertEquals(
      wrapper.find('.status').text(),
      'Make America code again'
    );
  });

  it("Renders text 'Code for everyone' if state.united is true", () => {
    wrapper.instance().unite();
    Test.assertEquals(wrapper.find('.status').text(), 'Code for everyone');
  });
});
