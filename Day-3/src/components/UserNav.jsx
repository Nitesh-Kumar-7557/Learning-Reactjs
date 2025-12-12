import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const UserNav = () => {
  const { user, login, logout } = useContext(UserContext);
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleLoginBtn = () => {
    login(input);
  };
  const handleLogoutBtn = () => {
    logout();
    setInput('')
  };
  return (
    <div>
      {user === null ? (
        <div>
          <h1>Guest Please Login</h1>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Enter Username..."
          />
          <button onClick={handleLoginBtn}>Login</button>
        </div>
      ) : (
        <div>
          <h1>Hello, {user.username}! </h1>
          <button onClick={handleLogoutBtn}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default UserNav;
