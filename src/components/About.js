import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent Compoenent Mounted");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <div>
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h1>About Us(Class Component)</h1>
        <h2>Here, We are learning React</h2>
        <UserClass
          name={"Shriyansh (class-based component)"}
          location={"Kolkata (class-based component)"}
        />
        {/* <User name={"Akshay"} /> */}
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

/*
  - Parent Constructor
  - Parent render

    - child1 constructor
    - child1 render
    < DOM UPDATION >
    - child1 componentDidMounted
    
    - child2 constructor
    - child2 render
    < DOM UPDATION >
    - child2 componentDidMounted
    
  < DOM UPDATION >
  - Parent componentDidMounted
  */
/*
 - Parent Constructor
 - Parent render
 
    - child1 constructor
    - child1 render
    
    - child2 constructor
    - child2 render
 
 
    < DOM UPDATION - IN SINGLE BATCH >
    - child1 componentDidMounted
    - child2 componentDidMounted

  - Parent componentDidMounted
*/
