import { useState } from "react";
const User = (props) => {
  const { name } = props;
  const [count, setCount] = useState(0);
  return (
    <div className="userCard">
      <h2>Name: {name}</h2>
      <h3>Location: Dehradoon</h3>
      <h4>Contact: @akshaymarch7</h4>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev+1)}>Increase</button>
      <button onClick={() => setCount((prev) => prev-1)}>Decrease</button>
    </div>
  );
};

export default User;
