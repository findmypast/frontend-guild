const React = require("react");

const withTruncateParagraph = WrapComponent => {
  const WithTruncateParagraph = ({ children, textLength, ...props }) => {
    return (
      <WrapComponent {...props}>
        {truncateText(children, textLength)}
      </WrapComponent>
    );
  };

  WithTruncateParagraph.displayName = `WithTruncateParagraph(${getDisplayName(
    WrapComponent
  )})`;
  WithTruncateParagraph.defaultProps = {
    textLength: 10
  };
  return WithTruncateParagraph;
};

function truncateText(text, length) {
  if (length > -1) return text.substring(0, length) + "...";

  return text;
}

function getDisplayName(WrapComponent) {
  return WrapComponent.displayName || WrapComponent.name || "Component";
}
