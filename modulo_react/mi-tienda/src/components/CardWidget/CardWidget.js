import React, { useContext } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CartContext } from "../CartContext";
import "./CardWidget.scss";

export default function CardWidget() {
  const contextCart = useContext(CartContext);
  const item = contextCart.getCount();
  return (
    <div className="card-widget">
      <div className="card-widget__item">{item !== 0 ? item : null}</div>
      <ShoppingCartOutlined className="card-widget__icon" />
    </div>
  );
}
