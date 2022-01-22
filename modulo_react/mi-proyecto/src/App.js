import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header/Header";
import ItemListConteiner from "./components/ItemListConteiner";

function App() {
  return (
    <Router>
      <Container className="app">
        <Header />
        <Row className="cuerpo">
          <ItemListConteiner />
        </Row>
        <Row className="footer"></Row>
      </Container>
    </Router>
  );
}

export default App;
