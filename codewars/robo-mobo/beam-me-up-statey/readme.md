# Beam me up Statey using ReactJS

Star Trek The United Federation of Planets is testing out their new transporter technology.

Statey needs to successfully transport three people from a planet to the Enterprise and three other people from Enterprise to the planet. (With none of them dying).

The React pattern to apply to this kata is [Lifting State up](https://reactjs.org/docs/lifting-state-up.html) so it's important you read this.

> Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. Let’s see how this works in action.

## Challenge

There will be three components defined for you `Universe`, `Planet` and `Starship`.

The Planet and Starship have inhabitants.