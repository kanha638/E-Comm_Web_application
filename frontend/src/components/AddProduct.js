import React from "react";
import { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const clickHandelor = async () => {
    let userId = JSON.parse(localStorage.getItem("user"));
    userId = userId._id;

    let result = await fetch("http://localhost:5001/add-product", {
      method: "POST",
      body: JSON.stringify({ name, price, img, desc, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };
  return (
    <div className="container1">
      <div className="form">
        <h2 className="normal">
          <b>Add Product</b>
        </h2>
        <input
          type="text"
          placeholder="Enter Product Name"
          className="inp"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Enter Product Price"
          className="inp"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Enter Product image url"
          className="inp"
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Enter Product Description"
          className="inp"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></input>
        <button className="inp-btn" onClick={clickHandelor}>
          Add Product{" "}
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
