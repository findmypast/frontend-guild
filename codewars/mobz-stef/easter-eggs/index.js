const React = require("react");

const EggList = ({ eggs }) => {
  return (
    <ul>
      {eggs.map((item, index) => {
        return <EasterEgg key={index} name={item} />;
      })}
    </ul>
  );
};

const EasterEgg = ({ name }) => {
  return <li>{name}</li>;
};
