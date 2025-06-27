import User from "./User";
import UserClass from "./UserClass"
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>Here, We are learning React</h2>
      <User name={"Shriyansh (functional-component)"}/>
      <UserClass name={"Shriyansh (class-based component)"} location={"Kolkata (class-based component)"}/>
    </div>
  );
};

export default About;