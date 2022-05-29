import React, { useState } from "react";

function Product(props) {
  const [a, seta] = useState(0);
  const clickHandelor = () => {
    const b = a + 2;
    seta(b);
  };
  return (
    <div className="book" onClick={clickHandelor}>
      <img src={props.img} alt="book" />
      <h1>{props.name}</h1>
      <hr />
      <h4>{props.price}</h4>
      <h5>{props.desc}</h5>
    </div>
  );
}
export default Product;
