import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./CardWidget.scss";

export default function CardWidget({ item }) {
  return (
    <div className="card-widget">
      <div className="card-widget__item">{item}</div>
      <ShoppingCartOutlined className="card-widget__icon" />
    </div>
  );
}
