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
import { AZ3002UKPage } from "./pages/templateProdInfoPage/az3002ukPage/az3002ukPage";
import { AZ3000UKTPage } from "./pages/templateProdInfoPage/az3000uktPage/az3000uktPage";
import { NV602UKPage } from "./pages/templateProdInfoPage/nv602ukPage/nv602ukPage";
import { NZ691UKTPage } from "./pages/templateProdInfoPage/nz691uktPage/nz691uktPage";
import { AZ3900UKTPage } from "./pages/templateProdInfoPage/az3900uktPage/az3900uktPage";

function App() {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, amount: 1 }];
      }
    });
  };

  useEffect(() => {
    if (
      location.pathname === "/zIdNZ810UKT" ||
      location.pathname === "/zIdAZ3002UK" ||
      location.pathname === "/zIdAZ3000UKT" ||
      location.pathname === "/zIdNV602UK" ||
      location.pathname === "/zIdNZ691UKT"
    ) {
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
          element={
            <NZ801UKTPage setCart={setCart} addToCart={addToCart} cart={cart} />
          }
        />
        <Route
          path="/zIdAZ3002UK"
          element={
            <AZ3002UKPage setCart={setCart} addToCart={addToCart} cart={cart} />
          }
        />
        <Route
          path="/zIdNV602UK"
          element={
            <NV602UKPage setCart={setCart} addToCart={addToCart} cart={cart} />
          }
        />
        <Route
          path="/zIdNZ691UKT"
          element={
            <NZ691UKTPage setCart={setCart} addToCart={addToCart} cart={cart} />
          }
        />
        <Route
          path="/zIdAZ3900UKT"
          element={
            <AZ3900UKTPage
              setCart={setCart}
              addToCart={addToCart}
              cart={cart}
            />
          }
        />

        <Route
          path="/zIdAZ3000UKT"
          element={
            <AZ3000UKTPage
              setCart={setCart}
              addToCart={addToCart}
              cart={cart}
            />
          }
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
