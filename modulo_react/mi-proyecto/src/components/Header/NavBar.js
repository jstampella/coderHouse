import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import logoProyecto from "../../assets/img/logo.png";
import CardWidget from "../CardWidget";

export default function NavBar() {
  return (
    <>
      <Col xs lg="2" className="app-header__logo">
        <Link to={"/"}>
          <img src={logoProyecto} alt="WebPersonal" />
        </Link>
      </Col>
      <Col className="app-nav">
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/Productos">Productos</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/Outlet">Outlet</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/Contacto">Contacto</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col xs lg="2" className="app-nav right">
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col xs lg="1" className="app-nav center">
        <CardWidget item="0" />
      </Col>
    </>
  );
}
