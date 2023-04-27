import React from "react";

function Item({ data }) {
  return (
    <div className="shadow-md bg-white text-center">
      <img className="rounded-lg mx-auto" src={data.message} alt="dog" />
    </div>
  );
}

export default Item;
