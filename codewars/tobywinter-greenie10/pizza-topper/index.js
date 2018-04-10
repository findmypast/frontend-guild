const React = require('react');

const PizzaTopper = (props) => {
  

  return (
  <div id="order">
    Pizza topped with: {props.toppings}  
  </div>
  )
}

PizzaTopper.defaultProps = {
  toppings: 'Cheese',
};

PizzaTopper.displayName = 'PizzaTopper'
