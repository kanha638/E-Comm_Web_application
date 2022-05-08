import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
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
          <Link to="/Logout">Logout</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
