import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Container className="app">
        <Row className="app-header">
          <NavBar />
        </Row>
        <Row className="cuerpo"></Row>
        <Row className="footer"></Row>
      </Container>
    </Router>
  );
}

export default App;
