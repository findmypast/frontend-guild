# Beam me up Statey using ReactJS

The React pattern to apply to this kata is [Lifting State up](https://reactjs.org/docs/lifting-state-up.html) reading the docs will help.

> Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. Let’s see how this works in action.

## Objective

Star Trek The United Federation of Planets is testing out their new transporter technology.

Statey needs to successfully transport three people from a planet to the Enterprise and three other people from Enterprise to the planet. (With none of them dying).

There will be three components defined for you `Universe`, `Planet` and `Starship` but each of them of have missing features to transport a person.

The Planet and Star ship have inhabitants only known to themselves.

- Clicking a transport button for a person should trigger the tranport process
- When being transported a person should be removed from one inhabitants list to the other. e.g A person from a Planet should be removed and added to the Star ship.
- The `Planet` and `Starship` should have a `transport` prop for "Lifting state up"
- The `Planet` and `Starship` might need `componentWillReceiveProps` to update Person passed through

Good luck and have fun!