import React, { useContext } from "react";
import { Button } from "antd";

import { CartContext } from "../CartContext";

import "./DisplayCount.scss";

export default function DisplayCount({ id, text }) {
  console.log(`${id} - ${text}`);
  const contextCart = useContext(CartContext);
  return (
    <div className="display-count">
      <Button onClick={() => contextCart.changeCount(id, -1)}>-</Button>
      <span className="display-count--text">{text}</span>
      <Button onClick={() => contextCart.changeCount(id, +1)}>+</Button>
    </div>
  );
}
