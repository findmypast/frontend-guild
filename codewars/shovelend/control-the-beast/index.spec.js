const { shallow } = require("enzyme");

let beasts = [
  "Gremlin",
  "Chupacabra",
  "Manticore",
  "Nessie",
  "Headless Horseman",
  "Kraken",
  "Godzilla",
  "Cerberus",
  "Frankenstein"
];

shuffle(beasts);

let passedBeastName = beasts[0];
let typedBeastName = beasts[1];
let uncontrolledBeastName = beasts[2];

describe(`Controlled Beast with the name ${passedBeastName} passed`, () => {
  const wrapper = shallow(<Beast name={passedBeastName} />);

  it(`should set the initial state to ${passedBeastName}`, () => {
    Test.assertEquals(wrapper.state("name"), passedBeastName);
  });

  it(`should have an initial value of ${passedBeastName}`, () => {
    Test.assertEquals(
      wrapper
        .find("#controlledName")
        .first()
        .props().value,
      passedBeastName
    );
  });

  it(`should change state when typing ${typedBeastName}`, () => {
    wrapper
      .find("#controlledName")
      .simulate("change", { target: { value: typedBeastName } });
    Test.assertEquals(wrapper.state("name"), typedBeastName);
  });
});

describe("Controlled Beast without props passed", () => {
  const wrapper = shallow(<Beast />);
  it("should set the default name to Yeti", () => {
    Test.assertEquals(wrapper.state("name"), "Yeti");
  });
});

function shuffle(array) {
  var i = 0,
    j = 0,
    temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
