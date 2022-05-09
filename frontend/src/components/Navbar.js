import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  let check = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="nav">
      <ul className="nav-ul">
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/add">Add product</Link>
        </li>
        <li>
          <Link to="/update">Update Product</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          {check ? (
            <Link onClick={logout} to="/signup">
              LogOut
            </Link>
          ) : (
            <Link to="/signup">SignUp</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
