import { React, useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import { Row, Col, Button, Table } from "antd";

import DisplayCount from "../DisplayCount";

import "./Cart.scss";

export default function Cart() {
  const contextCart = useContext(CartContext);
  //const itemList = contextCart.cartList;
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    setItemList(contextCart.cartList);
  }, [contextCart]);

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
      render: (text, record, index) => index + 1,
    },
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
      render: (text, record) => <DisplayCount id={record.id} text={text} />,
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
        <Table columns={columns} dataSource={itemList} rowKey="id" />
      </Col>
      <Col md={4}></Col>
    </Row>
  );
}
