import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart/Cart";
import ItemDetail from "./components/Items/ItemDetail/ItemDetail";
import About from "./components/About";
import NotFound from "./components/NotFound";
import ItemList from "./components/Items/ItemList/ItemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Col } from "antd";
import CartContextProvider from "./components/CartContext";
import "./App.scss";
//import "antd/dist/antd.css";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Col className="app">
          <Navbar className="navbar" />
          <Col className="contenido">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/productos"
                element={<ItemList url="producto/detalle" />}
              />
              <Route
                path="/productos/category/:id"
                element={<ItemList url="producto/detalle" />}
              />
              <Route path="/producto/detalle/:id" element={<ItemDetail />} />
              <Route path="nosotros" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Col>
          <Footer className="footer" />
        </Col>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
