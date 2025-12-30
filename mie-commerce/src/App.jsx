import Header from "./components/NavBar/Header";

import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

import ProductContainer from "./containers/ProductContainer";

import Inicio from "./components/Inicio/Inicio";
import ProductosContainer from "./containers/ProductosContainer";
import CartViewContainer from "./containers/CartViewContainer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<ProductosContainer />} />
          <Route path="/productos/product/:id" element={<ProductContainer />} />
          <Route path="/carrito" element={<CartViewContainer />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
