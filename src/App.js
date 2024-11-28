import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { CheckoutPage } from "./pages/checkoutPage/checkoutPage";
import { HomePage } from "./pages/home/homePage";
import { SignInPage } from "./pages/signInPage/signInPage";
import { LogInPage } from "./pages/logInPage/logInPage";
import { CordedVacPage } from "./pages/cordedVacPage/cordedVacPage";
import { CordlessVacPage } from "./pages/cordlessVacPage/cordlessVacPage";
import { OffersPage } from "./pages/offers/offersPage";
import { HairDryPage } from "./pages/hairDryPage/hairDryPage";
import { AirPurifierPage } from "./pages/airPurifierPage/airPurifierPage";
import { NZ801UKTPage } from "./pages/templateProdInfoPage/nz801Page/nz801Page";

function App() {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/zIdNZ810UKT") {
      document.body.classList.add("prodInfo_body");
    } else {
      document.body.classList.remove("prodInfo_body");
    }

    return () => {
      document.body.classList.remove("prodInfo_body");
    };
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
        <Route
          path="/offers"
          element={<OffersPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/corded-hoovers"
          element={<CordedVacPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/cordless-hoovers"
          element={<CordlessVacPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/hairDry-page"
          element={<HairDryPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/airPurifier-page"
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
        <Route
          path="/zIdNZ810UKT"
          element={<NZ801UKTPage setCart={setCart} cart={cart} />}
        />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter basename="/hooverShop">
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
