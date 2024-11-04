import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CheckoutPage } from "./pages/checkoutPage/checkoutPage";
import { Header } from "./component/header/header";
import { HomePage } from "./pages/home/homePage";
import { ProductsPage } from "./pages/products/productsPage";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <div className="App">
        <BrowserRouter basename="/hooverShop">
          <Header cart={cart} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/products-page"
              element={<ProductsPage cart={cart} setCart={setCart} />}
            />
            <Route
              path="/checkout-page"
              element={<CheckoutPage cart={cart} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
