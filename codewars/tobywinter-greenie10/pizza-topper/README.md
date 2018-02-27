# Learn about using `defaultProps`, `displayName`, `propTypes`

## Laura & Tobes [7kyu]

1. ReactJS on [Components and Props](https://reactjs.org/docs/components-and-props.html)
2. ReactJS on [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

```javascript
function withExample(Component) {
  return function(props) {
    return <Component />;
  };
}
```

## Your challenge

Pizza topping selector for meetups

* defaultProp for topping should be `margherita`
* Should have several varieties of toppings
* Should have a displayName of PizzaTopper

Enjoy :)