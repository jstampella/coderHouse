import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row } from "antd";
import { listItemsApi } from "../../../api/itemsApi";
import Loading from "../../common/Loading/Loading";
import Item from "../Item";

import "./ItemList.scss";
export default function ItemList({ url }) {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    setItems([]);
    listItemsApi(id).then((response) => {
      setItems(response);
      console.log(response);
    });
  }, [id]);

  if (items.length === 0) {
    return <Loading title="Cargando articulos" />;
  } else {
    if (items.data.length === 0 && items.cod === 200) {
      return <h1>Sin Resultados</h1>;
    }
  }
  return (
    <Row className="item-list">
      {items.data.map((item, index) => {
        return (
          <Item
            key={index}
            title={item.name}
            cod={item.id}
            price={item.cost}
            image={item.image}
            stock={item.stock}
            url={url}
          />
        );
      })}
    </Row>
  );
}
