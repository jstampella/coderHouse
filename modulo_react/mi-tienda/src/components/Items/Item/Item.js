import React from "react";
import { Row, Button } from "antd";
import { Link } from "react-router-dom";

import "./item.scss";

const options2 = { style: "currency", currency: "ARS" };
const numberFormat = new Intl.NumberFormat("es-AR", options2);
export default function Item({ title, cod, price, image, stock, url }) {
  return (
    <Row className="item">
      <Row className="item--title">{title}</Row>
      <Row className="item--imagen">
        <img src={image} alt={title} />
      </Row>
      <Row className="item--cod">Cod:{cod}</Row>
      <Row className="item--price">{numberFormat.format(price)}</Row>
      <Row className="item--stock">Stock disponible: {stock}</Row>
      <Row className="item--btn">
        <Button>
          <Link to={`/${url}/${cod}`}>Ver detalle</Link>
        </Button>
      </Row>
    </Row>
  );
}
