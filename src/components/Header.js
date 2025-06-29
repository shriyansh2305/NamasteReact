import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginButton = () => {
    setIsLoggedIn((prev) => !prev);
  };
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 mt-2 shadow-md">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-8 px-4">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button className="login" onClick={handleLoginButton}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
