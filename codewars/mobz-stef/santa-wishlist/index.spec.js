const React = require("react");
const { shallow } = require("enzyme");
const sinon = require("sinon");

let wishes = [
  "Pony",
  "Unicorn",
  "XBox",
  "Woolen Socks",
  "Candy",
  "World Peace",
  "Bike"
];

let names = [
  "Attila",
  "Steffi",
  "Mobile",
  "Rob",
  "Laura",
  "Dennis",
  "Jack",
  "Toby"
];

let selectedWish = wishes[getRandomInt(wishes.length)];
let selectedName = names[getRandomInt(names.length)];


describe("Santa wish-list form", () => {

  let form;

  before(() => {
    form = shallow(
      <WishlistForm />
    );
  });

  it("has an initial state containing name, wish and priority", () => {
    Test.assertEquals(form.state('name'), '');
    Test.assertEquals(form.state('wish'), '');
    Test.assertEquals(form.state('priority'), 1);
  });

  it("has an input field with id 'name'", () => {
    let nameInput = form.find('#name');
    Test.assertEquals(nameInput.length, 1);
    Test.assertEquals(nameInput.type(), 'input');
  });

  it("has an text area with id 'wish'", () => {
    let wishInput = form.find('#wish');
    Test.assertEquals(wishInput.length, 1);
    Test.assertEquals(wishInput.type(), 'textarea');
  });

  it("has 'priority' drop-down with values from 1-5, defaults to 1", () => {
    let priorityInput = form.find('#priority');
    Test.assertEquals(priorityInput.length, 1);
    Test.assertEquals(priorityInput.type(), 'select');
    Test.assertEquals(priorityInput.props().value, 1);
    Test.assertEquals(form.find('option').length, 5);
  });

  it("submits the content of the form and calls preventDefault", () => {
    const spy = sinon.spy();
    const event = {preventDefault: spy};
    form.simulate('submit', event);
    Test.assertEquals(form.state('success'), true);
    Test.assertEquals(spy.called, true);
  });


  it(`should change state when entering ${selectedName} as name`, () => {
    form.find("#name")
      .simulate("change", { target: { value: selectedName } });
    Test.assertEquals(form.state("name"), selectedName);
  });

  it(`should change state when entering ${selectedWish} as a wish`, () => {
    form.find("#wish")
      .simulate("change", { target: { value: selectedWish } });
    Test.assertEquals(form.state("wish"), selectedWish);
  });

  let prio = getRandomInt(5)+1;
  it(`should change state when selecting a priority of ${prio}`, () => {
    form.find('select')
      .simulate('change', {target: { value : prio}});
    Test.assertEquals(form.state("priority"), prio);
  });


});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
