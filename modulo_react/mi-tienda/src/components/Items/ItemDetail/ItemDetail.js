import React, { useState, useEffect } from "react";
import { Row } from "antd";
import ItemCount from "../../ItemCount";
import { detailItemsApi } from "../../../api/itemsApi";
import Loading from "../../common/Loading/Loading";
import { useParams } from "react-router-dom";

import "./ItemDetail.scss";

export default function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState([]);
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
      <ItemCount
        id={item.id}
        min={1}
        max={item.stock}
        onAdd={(count, id) => {
          alert(`Se agrego el articulo ${id} cantidad ${count}`);
        }}
      />
    </Row>
  );
}
