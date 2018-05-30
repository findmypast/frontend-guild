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

  it("Start transporter from Starship", () => {
    let didTransport = false;
    const transport = () => didTransport = true;
    const result = shallow(<Starship transport={transport} />);
    const starshipInstance = result.instance();

    expect(starshipInstance).to.have.property('transport', 'Starship should have a method called "transport"');

    const setTransport = starshipInstance.transport('Lauras');

    // setTransport = function
    // call setTransport and check didTransport
  });
});

describe('Transport everyone', () => {
  it('from the planet to starship', () => {
    const allPeople = ["Attilus", "Dennix", "Mobius"];
    const result = mount(<Universe />);
    const allPeopleOnPlanet = result.find('Planet button');

    allPeopleOnPlanet.at(0).simulate('click');
    allPeopleOnPlanet.at(0).simulate('click');
    allPeopleOnPlanet.at(0).simulate('click');

    const allPeopleOnStarship = result.find('Starship button');

    allPeople.forEach((personName, i) => {
      expect(allPeopleOnStarship.at(i + 3).text()).to.equal('Transport ' + allPeople[i]);
    });
  });

  it('from the starship to planet', () => {
    const allPeople = ["Lauras", "Tobin", "Robot"];
    const result = mount(<Universe />);
    const allPeopleOnStarship = result.find('Starship button');

    allPeopleOnStarship.at(0).simulate('click');
    allPeopleOnStarship.at(0).simulate('click');
    allPeopleOnStarship.at(0).simulate('click');

    const allPeopleOnPlanet = result.find('Planet button');

    allPeople.forEach((personName, i) => {
      expect(allPeopleOnPlanet.at(i + 3).text()).to.equal('Transport ' + allPeople[i]);
    });
  });

});

describe('In transit a.k.a the pattern buffer', () => {
  it('when teleporting from the planet to starship', () => {
    const allPeople = ["Attilus", "Dennix", "Mobius"];
    const mountedUniverse = mount(<Universe />);
    const allPeopleOnPlanet = mountedUniverse.find('Planet button');

    allPeopleOnPlanet.at(0).simulate('click');

    expect(mountedUniverse.state()).to.have.property('intransitToStarShip').to.contain('Attilus');
  });

  it('when teleporting from the starship in planet', () => {
    const allPeople = ["Lauras", "Tobin", "Robot"];;
    const mountedUniverse = mount(<Universe />);
    const allPeopleOnStarship = mountedUniverse.find('Starship button');

    allPeopleOnStarship.at(0).simulate('click');

    expect(mountedUniverse.state()).to.have.property('intransitToPlanet').to.contain('Lauras');
  });
});