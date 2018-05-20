import React from "react";
const { shallow, mount, render } = require("enzyme");
const { expect } = require("chai");

// dont copy this import
import { Universe, Planet, Starship } from "./";

describe("Setup Universe, Starship and Planet", () => {
  it("Setup Universe, Starship and Planet should be React components", () => {
    expect(Universe).to.be.an(
      "function",
      "Universe should be a React component"
    );

    expect(Starship).to.be.an(
      "function",
      "Starship should be a React component"
    );

    expect(Planet).to.be.an("function", "Planet should be a React component");
  });

  it("Starship setup its own inhabitants", () => {
    const result = shallow(
      <Starship />
    );
    const buttons = result.find("button");
    expect(buttons.length).to.equal(3, "Starship should have 3 inhabitants");
    expect(buttons.at(0).text()).to.equal(
      "Transport Lauras",
      "Starships first inhabitant should be 'Laura'"
    );
  });

  it("Planet setup its own inhabitants", () => {
    const result = shallow(
      <Planet />
    );
    const buttons = result.find("button");
    expect(buttons.length).to.equal(3, "Planet should have 3 inhabitants");
    expect(buttons.at(0).text()).to.equal(
      "Transport Attilus",
      "Planets first inhabitant should be 'Attilus'"
    );
  });

  it("Universe contains a starship and a planet", () => {
    const result = shallow(<Universe />);

    const Starship = result.find("Starship");
    const Planet = result.find("Planet");
    expect(Starship).to.exist;
    expect(Planet).to.exist;
  });
});

describe('Transport person', () => {
  it('from the planet to starship', () => {
    const person = 'Transport Attilus';
    const result = mount(<Universe />);
    const firstPersonOnPlanet = result.find('Planet button').at(0);

    expect(firstPersonOnPlanet.text()).to.equal(person);

    firstPersonOnPlanet.simulate('click');
    const forthPersonOnStarship = result.find('Starship button').at(3);

    expect(forthPersonOnStarship.text()).to.equal(person);
  });

  it('from the starship to planet', () => {
    const person = 'Transport Lauras';
    const result = mount(<Universe />);
    const firstPersonOnStarship = result.find('Starship button').at(0);

    expect(firstPersonOnStarship.text()).to.equal(person);

    firstPersonOnStarship.simulate('click');
    const forthPersonOnPlanet = result.find('Planet button').at(3);

    expect(forthPersonOnPlanet.text()).to.equal(person);
  });

});

describe('Transport everyone', () => {
  it('from the planet to starship', () => {
    const allPeople = ["Attilus", "Dennix", "Mobius"];
    const result = mount(<Universe />);
    const allPeopleOnPlanet = result.find('Planet button');

    const peopleNodes = allPeopleOnPlanet.map((person) => person);

    peopleNodes[0].simulate('click');
    peopleNodes[0].simulate('click');
    peopleNodes[0].simulate('click');

    const allPeopleOnStarship = result.find('Starship button');

    allPeople.forEach((personName, i) => {
      expect(allPeopleOnStarship.at(i + 3).text()).to.equal('Transport ' + allPeople[i]);
    });
  });

});