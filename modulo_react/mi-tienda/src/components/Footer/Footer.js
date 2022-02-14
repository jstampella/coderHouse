import React from "react";
import { Row, Col } from "antd";

import "./Footer.scss";

export default function Footer() {
  return (
    <Row className="footer">
      <Col md={4}></Col>
      <Col md={16} className="footer__center">
        <Col md={8} className="footer--copy">
          Copyright © 1999-2022
        </Col>
        <Col md={8}>Atop tienda de ropa - venta online</Col>
        <Col md={8} className="footer--autor">
          Stampella Jonathan
        </Col>
      </Col>
      <Col md={4}></Col>
    </Row>
  );
}
