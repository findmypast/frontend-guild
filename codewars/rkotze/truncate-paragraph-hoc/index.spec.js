const ShallowRenderer = require("react-test-renderer/shallow");

const Paragraph = props => <p>{props.children}</p>;
const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;

const ShortParagraph = withTruncateParagraph(Paragraph);

function executeRender(jsx) {
  const renderer = new ShallowRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
}

function joinChildren(children) {
  return children.join ? children.join("") : children;
}

describe("HOC withTruncateParagraph", () => {
  it("return a function", () => {
    Test.assertEquals(
      typeof ShortParagraph,
      "function",
      "withTruncateParagraph should return a function"
    );
  });

  it("should shorten length of text by 10 and add ellipsis", () => {
    const result = executeRender(<ShortParagraph>{text}</ShortParagraph>);
    Test.assertEquals(
      joinChildren(result.props.children),
      "Lorem Ipsu...",
      "Truncate to 10 characters with ellipsis at the end"
    );
  });

  it("should 0 textLength should just leave the ellipsis visible", () => {
    const result = executeRender(
      <ShortParagraph textLength={0}>{text}</ShortParagraph>
    );
    Test.assertEquals(
      joinChildren(result.props.children),
      "...",
      "Truncate to 10 characters with ellipsis at the end"
    );
  });

  for (let i = 0; i < 10; i++) {
    const truncLength = Math.floor(Math.random() * 100);
    it(
      "should shorten length of text by " + truncLength + " and add ellipsis ",
      () => {
        const result = executeRender(
          <ShortParagraph textLength={truncLength}>{text}</ShortParagraph>
        );
        Test.assertEquals(
          joinChildren(result.props.children),
          text.substring(0, truncLength) + "...",
          "Truncate to 20 characters with ellipsis at the end"
        );
      }
    );
  }

  it("should not shorten text because prop.textLength is -1", () => {
    const result = executeRender(
      <ShortParagraph textLength={-1}>{text}</ShortParagraph>
    );
    Test.assertEquals(
      joinChildren(result.props.children),
      text,
      "Should not be truncated and not ellipsis"
    );
  });

  it("should allow addition props through", () => {
    const result = executeRender(
      <ShortParagraph random="prop" className="bold" textLength={-1}>
        {text}
      </ShortParagraph>
    );
    const propKeys = Object.keys(result.props);
    Test.expect(
      propKeys.includes("className"),
      "Should have a className prop passed through"
    );

    Test.expect(
      propKeys.includes("random"),
      "Should have a random prop passed through"
    );
  });
});

describe("HOC displayName", () => {
  it("should have the correct displayName using .name", () => {
    const Paragraph = props => <p>{props.children}</p>;
    const ShortParagraph = withTruncateParagraph(Paragraph);
    Test.assertEquals(
      ShortParagraph.displayName,
      "WithTruncateParagraph(Paragraph)",
      "displayName is not set for wrap component use function.name instead"
    );
  });

  it("should have the correct displayName using .displayName", () => {
    const Paragraph = props => <p>{props.children}</p>;
    Paragraph.displayName = "ParagraphDisplay";
    const ShortParagraph = withTruncateParagraph(Paragraph);
    Test.assertEquals(
      ShortParagraph.displayName,
      "WithTruncateParagraph(ParagraphDisplay)",
      "This uses displayName on wrapped component"
    );
  });

  it('should have final fallback of "Component" as displayname', () => {
    const ShortParagraph = withTruncateParagraph(props => (
      <p>{props.children}</p>
    ));
    Test.assertEquals(
      ShortParagraph.displayName,
      "WithTruncateParagraph(Component)",
      "No displayName or name is found so should fallback to 'Component'"
    );
  });
});
