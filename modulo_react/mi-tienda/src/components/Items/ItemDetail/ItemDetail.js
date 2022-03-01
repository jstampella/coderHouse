import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemCount";
import Loading from "../../common/Loading/Loading";
import { useParams } from "react-router-dom";
import { CartContext } from "../../CartContext";
import { firestoreFetchOne } from "../../../utils/firebase/firestoreFetch";

import "./ItemDetail.scss";

export default function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [count, setCount] = useState(0);
  const contextCart = useContext(CartContext);

  const onAdd = (count) => {
    setCount(count);
    contextCart.addToCart(item, count);
  };

  useEffect(() => {
    firestoreFetchOne(id)
      .then((result) => setItem(result))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    let item = contextCart.getProduct(id);
    console.log(item);
    if (item) setCount(item.count);
  }, [contextCart, id]);

  if (item.length === 0) {
    return <Loading title="Cargando detalle" />;
  }
  return (
    <>
      <Col md={4}></Col>
      <Col md={16} className="item-detail">
        <Row className="item-detail--title">{item.name}</Row>
        <Row className="item-detail__content">
          <Row className="item-detail__content--imagen">
            <img src={item.image} alt={item.name} />
          </Row>
          <Row className="item-detail__content--extra">
            <Row className="item-detail__content--cod">Cod: {item.id}</Row>
            <Row className="item-detail__content--price">
              Precio: ${item.cost}
            </Row>
            <Row className="item-detail__content--stock">
              Stock disponible: {item.stock}
            </Row>
            {count === 0 ? (
              <ItemCount
                id={item.id}
                min={1}
                init={count}
                max={item.stock}
                onAdd={onAdd}
              />
            ) : (
              <div className="item-detail__count">
                <Row>
                  <Col>Articulos agregados al carrito {count}</Col>
                </Row>
                <Row className="item-detail__content--btn">
                  <Button>
                    <Link to={`/cart`}>Ver carrito</Link>
                  </Button>
                </Row>
              </div>
            )}
          </Row>
        </Row>
      </Col>
      <Col md={4}></Col>
    </>
  );
}
