import React from "react";
import ReactDOM from "react-dom/client";

/*
  const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React 🚀"
  );

  console.log(heading);
*/

// JSX React Element

const element = <span>React Element</span>;

const title = (
  <h1 className="head"> {element} and Namaste React using JSX 🚀</h1>
);

const number = 100;

// React Functional Component
const HeadingComponent = () => {
  return (
    <div id="container">
      {title}
      <h2>{number}</h2>
      <h1 id="heading">Namaste React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
