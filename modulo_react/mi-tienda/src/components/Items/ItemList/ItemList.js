import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row } from "antd";
import Loading from "../../common/Loading/Loading";
import Item from "../Item";
import { firestoreFetch } from "../../../utils/firebase/firestoreFetch";

import "./ItemList.scss";
export default function ItemList({ url }) {
  const [items, setItems] = useState([]);
  const [init, setInit] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    setInit(0);
    setItems([]);
    firestoreFetch(id)
      .then((result) => {
        setItems(result);
        setInit(1);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (init === 0) {
    return <Loading title="Cargando articulos" />;
  } else {
    if (items.length === 0) {
      return <h1>Sin Resultados</h1>;
    }
  }
  return (
    <Row className="item-list">
      {items.map((item, index) => {
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
