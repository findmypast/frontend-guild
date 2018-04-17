const { shallow, render } = require("enzyme");

describe("Setup Universe, Starship and Planet", () => {
  it("Setup Universe, Starship and Planet should be React components", () => {
    Test.assertEquals(
      typeof Universe,
      "function",
      "Universe should be a React component"
    );
    Test.assertEquals(
      typeof Starship,
      "function",
      "Starship should be a React component"
    );
    Test.assertEquals(
      typeof Planet,
      "function",
      "Planet should be a React component"
    );
  });

  it("Starship setup its own inhabitants", () => {
    const result = shallow(
      <Starship inhabitants={["Lauras", "Tobin", "Robot"]} />
    );
    const buttons = result.find("button");
    Test.assertEquals(buttons.length, 3, "Starship should have 3 inhabitants");
    Test.assertEquals(
      buttons.at(0).text(),
      "Transport Lauras",
      "Starships first inhabitant should be 'Laura'"
    );
  });

  it("Planet setup its own inhabitants", () => {
    const result = shallow(
      <Planet inhabitants={["Attilus", "Dennix", "Mobius"]} />
    );
    const buttons = result.find("button");
    Test.assertEquals(buttons.length, 3, "Planet should have 3 inhabitants");
    Test.assertEquals(
      buttons.at(0).text(),
      "Transport Attilus",
      "Planets first inhabitant should be 'Attilus'"
    );
  });
});
