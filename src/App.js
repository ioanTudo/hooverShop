import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CheckoutPage } from "./pages/checkoutPage/checkoutPage";

import { HomePage } from "./pages/home/homePage";
import { ProductsPage } from "./pages/products/productsPage";
import { useState } from "react";
import { Header } from "./component/header/header";
import { SignInPage } from "./pages/signInPage/signInPage";
import { LogInPage } from "./pages/logInPage/logInPage";
import { FooterDisplay } from "./component/footer/footerDisplay";
import { FooterContainer } from "./component/footer/footerContainer";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <div className="App">
        <BrowserRouter basename="/hooverShop">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/products-page"
              element={<ProductsPage cart={cart} setCart={setCart} />}
            />
            <Route path="/signIn-page" element={<SignInPage />} />
            <Route path="/logIn-page" element={<LogInPage />} />
            <Route
              path="/checkout-page"
              element={<CheckoutPage setCart={setCart} cart={cart} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
