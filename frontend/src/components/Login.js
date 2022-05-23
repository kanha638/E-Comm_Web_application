import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const check = localStorage.getItem("user");
    if (check) {
      navigate("/");
    }
  });

  const clickHandler = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:5001/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("You have Entered Wrong Password Or Email");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container1">
      <div className="form">
        <h2 className="normal">
          <b>Sign In</b>
        </h2>
        <hr />

        <input
          type="text"
          className="inp"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="Password"
          className="inp"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="inp-btn" onClick={clickHandler}>
          SignIn
        </button>
      </div>
    </div>
  );
};
export default Login;
