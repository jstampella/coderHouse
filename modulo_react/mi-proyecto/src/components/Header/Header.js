import React from "react";
import NavBar from "./NavBar";
import { Row } from "react-bootstrap";
export default function Header() {
  return (
    <Row className="app-header">
      <NavBar />
    </Row>
  );
}
