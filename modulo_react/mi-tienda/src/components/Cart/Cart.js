import { React, useContext, useEffect } from "react";
import { CartContext } from "../CartContext";
import { Row, Col, Button, Table } from "antd";

import "./Cart.scss";

export default function Cart() {
  const contextCart = useContext(CartContext);
  const itemList = contextCart.cartList;

  console.log(itemList);
  itemList.map((item, index) => (item.key = index + 1));
  const columns = [
    { title: "#", dataIndex: "key", key: "key" },
    { title: "cod", dataIndex: "id", key: "id" },
    {
      title: "imagen",
      dataIndex: "image",
      key: "image",
      render: (text) => <img src={text} alt={text} />,
    },
    {
      title: "descripcion",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "cantidad",
      dataIndex: "count",
      key: "count",
      render: (text, record) => displayCount(text, record.id, contextCart),
    },
    {
      title: "Precio",
      dataIndex: "cost",
      key: "cost",
      render: (text, record) => `$${text * record.count}`,
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <Button onClick={() => contextCart.removeToCart(record.id)}>
          Eliminar
        </Button>
      ),
    },
  ];
  return (
    <Row className="cart">
      <Col md={4}></Col>
      <Col md={16}>
        <Row className="cart-title">
          <h2>Carrito de Compras</h2>
        </Row>
        <Table columns={columns} dataSource={itemList} />
      </Col>
      <Col md={4}></Col>
    </Row>
  );
  //   return itemList.map((item) => <CartItem key={item.id} item={item} />);
}

function displayCount(text, id, contextCart) {
  return (
    <div className="change-count">
      <Button onClick={() => contextCart.changeCount(id, -1)}>-</Button>
      <span className="change-count--text">{text}</span>
      <Button onClick={() => contextCart.changeCount(id, +1)}>+</Button>
    </div>
  );
}
