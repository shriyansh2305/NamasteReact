import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Compoenent Mounted");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us(Class Component)</h1>
        <h2>Here, We are learning React</h2>
        <UserClass
          name={"Shriyansh (class-based component)"}
          location={"Kolkata (class-based component)"}
        />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>Here, We are learning React</h2>
//       <UserClass
//         name={"Shriyansh (class-based component)"}
//         location={"Kolkata (class-based component)"}
//       />
//     </div>
//   );
// };

export default About;
