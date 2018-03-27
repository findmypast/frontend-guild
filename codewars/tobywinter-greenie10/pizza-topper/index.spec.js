const {shallow} = require('enzyme'); 
  let wrapper

before(() => {
    wrapper = shallow(<PizzaTopper />);
  });

describe('PizzaTopper', () => {
  
  it("Has defaultProps topping of 'Cheese'", () => {
    const result = wrapper.instance().props.toppings
    Test.assertEquals(
      result,
      'Cheese',
      'Needs to have defaultProps'
    );
  });
  
  it("Returns a div with an id of 'order'", () => {
    const result = wrapper.find('#order').node.props.id
    Test.assertEquals(
     result, 
    'order', 
    'Should have a container with the id of order'
    );
  });
  
  it('Displays "Pizza topped with: Cheese" by default', () => {
    const result = wrapper.find('#order').node.props.children.join('')
    Test.assertEquals(
      result,
      'Pizza topped with: Cheese',
      'This is the default pizza.'
    );
  });
  
  it('Has a displayName of PizzaTopper', () => {
    const result = PizzaTopper.displayName
    Test.assertEquals(
      result,
      'PizzaTopper',
      'Should use displayName to set the displayName for PizzaTopper'
    );
  });
  
  it('Can add a topping to a pizza order by passing a toppings prop', () => {
    const result = shallow(<PizzaTopper toppings='Pepperoni, Basil'/>).find('#order').node.props.children.join('')
    Test.assertEquals(
      result,
      'Pizza topped with: Pepperoni, Basil',
      'Props can be passed to replace default toppings prop'
    );
  });
});
