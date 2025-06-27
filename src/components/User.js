import { useEffect, useState } from "react";
const User = (props) => {
  const { name } = props;
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect Called");
    
    const interval = setInterval(() => {
      console.log("Namaste React OP from useEffect");
    }, 1000);
    return () => {
      console.log("useEffect return is called");
      
      clearInterval(interval)
    }
  }, []);
  console.log("render");
  
  return (
    <div className="userCard">
      <h2>Name: {name}</h2>
      <h3>Location: Dehradoon</h3>
      <h4>Contact: @akshaymarch7</h4>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
    </div>
  );
};

export default User;
