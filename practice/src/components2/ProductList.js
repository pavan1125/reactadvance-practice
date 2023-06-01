import React from "react";

export default function ProductList(props) {
  console.log("rendered")
  return (
    <div>
      <img src={props.image} />
    </div>
  );
}
