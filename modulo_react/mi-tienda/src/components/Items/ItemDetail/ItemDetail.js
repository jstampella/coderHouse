import React, { useState, useEffect, useContext } from "react";
import { Row, Button } from "antd";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemCount";
import { detailItemsApi } from "../../../api/itemsApi";
import Loading from "../../common/Loading/Loading";
import { useParams } from "react-router-dom";
import { CartContext } from "../../CartContext";

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
    detailItemsApi(id).then((response) => {
      setItem(response[0]);
    });
  }, [id]);

  if (item.length === 0) {
    return <Loading title="Cargando detalle" />;
  }
  return (
    <Row className="item-detail">
      <Row className="item-detail--title">{item.name}</Row>
      <Row className="item-detail--imagen">
        <img src={item.image} alt={item.name} />
      </Row>
      <Row className="item-detail--cod">Cod:{item.cod}</Row>
      <Row className="item-detail--price">${item.cost}</Row>
      <Row className="item-detail--stock">Stock:{item.stock}</Row>
      {count === 0 ? (
        <ItemCount id={item.id} min={1} max={item.stock} onAdd={onAdd} />
      ) : (
        <Button>
          <Link to={`/cart`}>Ver carrito</Link>
        </Button>
      )}
    </Row>
  );
}
