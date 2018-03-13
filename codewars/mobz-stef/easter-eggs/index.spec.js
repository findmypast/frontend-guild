const React = require("react");
const { shallow } = require("enzyme");
const _ = require("lodash");

describe("Magic egg list", () => {
  let eggList;

  before(() => {
    eggList = shallow(
      <EggList eggs={["Lindt", "Cadburry", "Milka", "Maltesers"]} />
    );
  });

  it("has an unordered egg list component", () => {
    Test.assertEquals(eggList.name(), "ul");
  });

  it("has list items", () => {
    Test.assertEquals(eggList.find("EasterEgg").length, 4);
  });

  it("must have key prop", () => {
    const list = eggList.find("EasterEgg"); // is key needed when using a component
    Test.assertEquals(list.at(0).key(), "0");
    Test.assertEquals(list.at(1).key(), "1");
    Test.assertEquals(list.at(2).key(), "2");
    Test.assertEquals(list.at(3).key(), "3");
  });

  it("should have an EasterEgg child component", () => {
    Test.assertEquals(
      eggList
        .children()
        .first()
        .name(),
      "EasterEgg"
    );
    Test.assertEquals(
      eggList
        .children()
        .first()
        .props().name,
      "Lindt"
    );
  });

  for (let i = 1; i < 10; i++) {
    let rand = getRandomInt(100);
    let eggArray = Array(rand).fill("Lindt");

    it(`has ${rand} list items`, () => {
      let eggList = shallow(<EggList eggs={eggArray} />);
      Test.assertEquals(eggList.find("EasterEgg").length, rand);
    });
  }

  for (let i = 1; i < 10; i++) {
    let eggNames = ["Cadburry", "Lindt", "Milka", "Maltesers", "KitKat"];
    eggNames = _.shuffle(eggNames);

    it(`egg list should be in order of ${eggNames.toString()}`, () => {
      let eggList = shallow(<EggList eggs={eggNames} />);
      let theEggChildren = eggList.children();
      eggNames.forEach((name, i) => {
        Test.assertEquals(theEggChildren.get(i).props.name, name);
      });
    });
  }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
