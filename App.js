import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = <h1>Namaste React using JSX 🚀</h1>;

// React Components
// Class Based (OLD)
// React Functional Component (NEW) => A normal JS function, which returns some JSX code/react element

// We can write like this, if we are returning only one liner JSX

const Title = () => <h1>Namaste React 🚀</h1>;
const HeadingComponent = () => (
  <div className="container">
    <Title />
    <Title></Title>
    {Title()}
    {heading}
    <h1 className="heading">Namaste React From Functional Component</h1>
  </div>
);
// const HeadingComponentSame = () => {
//   return (
//     <div>
//       <h1 className="heading">Namaste React From Same Functional Component</h1>
//     </div>
//   );
// };
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent />);
// root.render(<HeadingComponentSame />);
