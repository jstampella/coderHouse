import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import { Container, Row } from "react-bootstrap";
import NavBar from "./components/NavBar";
import ItemListConteiner from "./components/ItemListConteiner";

function App() {
  return (
    <Router>
      <Container className="app">
        <Row className="app-header">
          <NavBar />
        </Row>
        <Row className="cuerpo">
          <ItemListConteiner />
        </Row>
        <Row className="footer"></Row>
      </Container>
    </Router>
  );
}

export default App;
