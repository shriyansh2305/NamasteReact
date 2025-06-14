import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement() => React Element which is an Object => on rendering => HTML Element

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
// JSX is transpiled before it reaches the JS engine -> done by Parcel using Babel

// JSX => converted to react.createElement by Babel => React Element which is an Object => on rendering => HTML Element
const jsxHeading = <h1>Namaste React using JSX 🚀</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
