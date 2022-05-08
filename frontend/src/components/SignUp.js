import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const val = () => {
    console.log(name, email, password);
  };
  return (
    <div className="signupform">
      <h2 className="normal">SIGN UP </h2>
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
  );
};

export default SignUp;
