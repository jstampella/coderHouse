import React from "react";
import { Row, Col, Menu } from "antd";
import CardWidget from "../CardWidget";

import { NavLink } from "react-router-dom";
import logoProyecto from "../../assets/img/logo.png";
import "./Navbar.scss";

const { SubMenu } = Menu;
export default function Navbar() {
  return (
    <Row className="navbar">
      <Col md={4} sm={0}></Col>
      <Col md={16} sm={24}>
        <Row>
          <Col md={4} className="navbar__logo">
            <NavLink to={"/"}>
              <img src={logoProyecto} alt="WebPersonal" />
            </NavLink>
          </Col>
          <Col md={14} className="navbar__menu">
            <Menu mode="horizontal">
              <Menu.Item key={1}>
                <NavLink to={"/"}>Home</NavLink>
              </Menu.Item>
              <SubMenu title="Productos" key={2}>
                <Menu.Item key={3}>
                  <NavLink to={"/productos/category/camisa"}>Remeras</NavLink>
                </Menu.Item>
                <Menu.Item key={4}>
                  <NavLink to={"/productos/category/pantalon"}>
                    Pantalones
                  </NavLink>
                </Menu.Item>
                <Menu.Item key={5}>
                  <NavLink to={"/productos/category/short"}>Shorts</NavLink>
                </Menu.Item>
                <Menu.Item key={8}>
                  <NavLink to={"/productos"}>Todos</NavLink>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key={6}>
                <NavLink to={"/nosotros"}>Nosotros</NavLink>
              </Menu.Item>
              <Menu.Item key={7}>
                <NavLink to={"/contacto"}>Contacto</NavLink>
              </Menu.Item>
            </Menu>
          </Col>
          <Col md={4} className="navbar__login">
            <NavLink to={"/login"}>Login</NavLink>
          </Col>
          <Col md={2} className="navbar__carrito">
            <NavLink to={"/cart"}>
              <CardWidget item={3} />
            </NavLink>
          </Col>
        </Row>
      </Col>
      <Col md={4} sm={0}></Col>
    </Row>
  );
}
