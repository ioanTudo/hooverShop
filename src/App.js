import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CheckoutPage } from "./pages/checkoutPage/checkoutPage";

import { HomePage } from "./pages/home/homePage";
import { useState } from "react";

import { SignInPage } from "./pages/signInPage/signInPage";
import { LogInPage } from "./pages/logInPage/logInPage";
import { CorderVacPage } from "./pages/cordedVacPage/cordedVacPage";

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
              path="/corded-hoovers"
              cart={cart}
              setCart={setCart}
              element={<CorderVacPage />}
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
