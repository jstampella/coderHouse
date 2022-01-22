import React from "react";
import { BsFillCartFill } from "react-icons/bs";

export default function CardWidget({ item }) {
  return (
    <div className="car">
      <div className="car__item">{item}</div>
      <BsFillCartFill />
    </div>
  );
}
