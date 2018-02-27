const ShallowRenderer = require('react-test-renderer/shallow');

function executeRender(jsx) {
  const renderer = new ShallowRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
}

describe('PizzaTopper', () => {
  it('returns "Pizza Margherita" by default', () => {
    const result = executeRender(<PizzaTopper />);
    Test.assertEquals(
      result,
      'Pizza Margherita',
      'This is the default pizza.'
    );
  });
});

