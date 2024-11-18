import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CheckoutPage } from "./pages/checkoutPage/checkoutPage";

import { HomePage } from "./pages/home/homePage";
import { useState } from "react";

import { SignInPage } from "./pages/signInPage/signInPage";
import { LogInPage } from "./pages/logInPage/logInPage";
import { CordedVacPage } from "./pages/cordedVacPage/cordedVacPage";
import { CordlessVacPage } from "./pages/cordlessVacPage/cordlessVacPage";
import { OffersPage } from "./pages/offers/offersPage";
import { set } from "react-hook-form";
import { HairDryPage } from "./pages/hairDryPage/hairDryPage";
import { AirPurifierPage } from "./pages/airPurifierPage/airPurifierPage";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <div className="App">
        <BrowserRouter basename="/hooverShop">
          <Routes>
            <Route
              path="/"
              element={<HomePage cart={cart} setCart={setCart} />}
            />
            <Route
              path="/offers"
              element={<OffersPage cart={cart} setCart={setCart} />}
            />
            <Route
              path="/corded-hoovers"
              cart={cart}
              setCart={setCart}
              element={<CordedVacPage cart={cart} setCart={setCart} />}
            />
            <Route
              path="/cordless-hoovers"
              cart={cart}
              setCart={setCart}
              element={<CordlessVacPage cart={cart} setCart={setCart} />}
            />
            <Route
              path="/hairDry-page"
              cart={cart}
              setCart={setCart}
              element={<HairDryPage cart={cart} setCart={setCart} />}
            />
            <Route
              path="/airPurifier-page"
              cart={cart}
              setCart={setCart}
              element={<AirPurifierPage cart={cart} setCart={setCart} />}
            />
            <Route
              path="/signIn-page"
              element={<SignInPage cart={cart} setCart={setCart} />}
            />
            <Route
              path="/logIn-page"
              element={<LogInPage cart={cart} setCart={setCart} />}
            />
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
