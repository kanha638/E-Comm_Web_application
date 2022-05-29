import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  //useEffect authentication if a user is logged in then he should not come back to signup page and also user can not come to signup page with url
  useEffect(() => {
    const check = localStorage.getItem("user");
    if (check) {
      navigate("/");
    }
  });

  // Onclick Function after clicking the Button
  const val = async () => {
    let result = await fetch("http://localhost:5001/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      console.log("api failure");
    }
  };

  return (
    <>
      <div className="container1">
        <div className="form">
          <h2 className="normal">
            <b>Sign Up </b>
          </h2>
          <hr />
          <input
            type="text"
            className="inp"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

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
          <button className="inp-btn" onClick={val}>
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
