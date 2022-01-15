import React from "react";
import { BsFillCartFill } from "react-icons/bs";

export default function CardWidget(props) {
  const { item } = props;
  return (
    <div className="car">
      <div className="car__item">{item}</div>
      <BsFillCartFill />
    </div>
  );
}
