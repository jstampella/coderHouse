import { React, useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import { Row, Col, Button, Table, Modal as ModalAntd } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import DisplayCount from "../DisplayCount";

import "./Cart.scss";

const { confirm } = ModalAntd;
const options2 = { style: "currency", currency: "ARS" };
const numberFormat = new Intl.NumberFormat("es-AR", options2);

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
      render: (text, record) => (
        <Link to={`/producto/detalle/${record.id}`}>
          <img src={text} alt={text} />
        </Link>
      ),
    },
    {
      title: "descripcion",
      dataIndex: "name",
      key: "name",
      render: (text) => <h3>{text}</h3>,
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
      render: (text, record) => `${numberFormat.format(text * record.count)}`,
    },
    {
      title: "Extra",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <Button onClick={() => contextCart.removeToCart(record.id)}>
          Eliminar
        </Button>
      ),
    },
  ];

  const confirmDelete = () => {
    confirm({
      title: "Vaciar carrito",
      content: `Estas seguro que quieres eliminar todos los productos?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        contextCart.removeAll();
      },
    });
  };

  return (
    <Row className="cart">
      <Col md={4}></Col>
      <Col md={16}>
        <Row className="cart-title">
          <Col md={20} sm={16} className="cart-title--txt">
            Carrito de Compras
          </Col>
          <Col md={4} sm={8} className="cart-title--icon">
            {itemList.length !== 0 ? (
              <DeleteOutlined onClick={confirmDelete} />
            ) : null}
          </Col>
        </Row>
        {itemList.length !== 0 ? (
          <Col>
            <Table columns={columns} dataSource={itemList} rowKey="id" />
            <CartMont itemList={itemList} />
          </Col>
        ) : (
          <CartEmpty />
        )}
      </Col>
      <Col md={4}></Col>
    </Row>
  );
}

function CartMont({ itemList }) {
  let priceT = 0;
  itemList.map((prop) => (priceT += prop.count * prop.cost));
  return (
    <Row className="cart-mont">
      <Col className="cart-mont__price">
        <Col className="cart-mont__price--t">TOTAL:</Col>
        <Col>{numberFormat.format(priceT)}</Col>
      </Col>
      <Col className="cart-mont__btn">
        <Button>Continuar compra</Button>
      </Col>
    </Row>
  );
}

function CartEmpty() {
  return (
    <Row className="cart-empty">
      <Row>Tu carrito está vacío</Row>
      <Row>
        <Button>
          <Link to="/productos">Ir a comprar</Link>
        </Button>
      </Row>
    </Row>
  );
}
