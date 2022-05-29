import React, { useState, useEffect } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    return async () => {
      let result = await fetch("http://localhost:5001/products/");
      result = await result.json();
      console.log(result);
      setproducts(result);
    };
  }, []);
  return (
    <div className="flex-box">
      <div className="sidebar">
        <ul>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
        </ul>
      </div>
      <div className="container">
        <Product
          name={"Oppo A7"}
          img="https://vlebazaar.in/image/cache/catalog//B07MPPZ529/OPPO-A7-Glaring-Gold-3GB-RAM-64GB-Storage-Without-Offer-B07MPPZ529-1-550x550.jpg"
          price="10000"
          desc="this is a good product"
        />
        <Product
          name={"Oppo A7"}
          img="https://vlebazaar.in/image/cache/catalog//B07MPPZ529/OPPO-A7-Glaring-Gold-3GB-RAM-64GB-Storage-Without-Offer-B07MPPZ529-1-550x550.jpg"
          price="10000"
          desc="this is a good product"
        />
        <Product
          name={"Oppo A7"}
          img="https://vlebazaar.in/image/cache/catalog//B07MPPZ529/OPPO-A7-Glaring-Gold-3GB-RAM-64GB-Storage-Without-Offer-B07MPPZ529-1-550x550.jpg"
          price="10000"
          desc="this is a good product"
        />
        <Product
          name={"Oppo A7"}
          img="https://vlebazaar.in/image/cache/catalog//B07MPPZ529/OPPO-A7-Glaring-Gold-3GB-RAM-64GB-Storage-Without-Offer-B07MPPZ529-1-550x550.jpg"
          price="10000"
          desc="this is a good product"
        />
        <Product
          name={"Oppo A7"}
          img="https://vlebazaar.in/image/cache/catalog//B07MPPZ529/OPPO-A7-Glaring-Gold-3GB-RAM-64GB-Storage-Without-Offer-B07MPPZ529-1-550x550.jpg"
          price="10000"
          desc="this is a good product"
        />{" "}
        <Product
          name={"Oppo A7"}
          img="https://vlebazaar.in/image/cache/catalog//B07MPPZ529/OPPO-A7-Glaring-Gold-3GB-RAM-64GB-Storage-Without-Offer-B07MPPZ529-1-550x550.jpg"
          price="10000"
          desc="this is a good product"
        />
        <Product
          name={"Oppo A7"}
          img="https://vlebazaar.in/image/cache/catalog//B07MPPZ529/OPPO-A7-Glaring-Gold-3GB-RAM-64GB-Storage-Without-Offer-B07MPPZ529-1-550x550.jpg"
          price="10000"
          desc="this is a good product"
        />
      </div>
    </div>
  );
};

export default Products;
