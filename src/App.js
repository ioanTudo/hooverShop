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
import { IP1251UKTPage } from "./pages/templateProdInfoPage/cordlessVacs/ip1251uktPage/ip1251uktPage.jsx";
import { NZ801UKTPage } from "./pages/templateProdInfoPage/cordedVacs/nz801Page/nz801Page.jsx";
import { AZ3002UKPage } from "./pages/templateProdInfoPage/cordedVacs/az3002ukPage/az3002ukPage.jsx";
import { NZ691UKTPage } from "./pages/templateProdInfoPage/cordedVacs/nz691uktPage/nz691uktPage.jsx";
import { NV602UKPage } from "./pages/templateProdInfoPage/cordedVacs/nv602ukPage/nv602ukPage.jsx";
import { AZ3900UKTPage } from "./pages/templateProdInfoPage/cordedVacs/az3900uktPage/az3900uktPage.jsx";
import { AZ3000UKTPage } from "./pages/templateProdInfoPage/cordedVacs/az3000uktPage/az3000uktPage.jsx";
import { IZ202UKTDBPage } from "./pages/templateProdInfoPage/cordlessVacs/iz202uktdbPage/iz202uktdbPage.jsx";
import { IZ400UKTPage } from "./pages/templateProdInfoPage/cordlessVacs/iz400uktPage/iz400uktPage.jsx";
import { IZ202UKTPage } from "./pages/templateProdInfoPage/cordlessVacs/iz202uktPage/iz202uktPage.jsx";
import { IZ202UKPage } from "./pages/templateProdInfoPage/cordlessVacs/iz202ukPage/iz202ukPage.jsx";
import { IZ420UKTDBPage } from "./pages/templateProdInfoPage/cordlessVacs/iz420uktdbPage/iz420uktdbPage.jsx";
import { HD731UKPage } from "./pages/templateProdInfoPage/beautyProd/hairDryers/hd731ukPage/hd731ukPage.jsx";
import { HD752UKPage } from "./pages/templateProdInfoPage/beautyProd/hairDryers/hd752ukPage/hd752ukPage.jsx";
import { HD731202UKPage } from "./pages/templateProdInfoPage/beautyProd/hairDryers/hd731202ukPage/hd731202ukPage.jsx";
import { HP300UKPage } from "./pages/templateProdInfoPage/airPurifiers/hp300ukPage/hp300ukPage.jsx";
import { HP150UKPage } from "./pages/templateProdInfoPage/airPurifiers/hp150ukPage/hp150ukPage.jsx";
import { HC450UKPage } from "./pages/templateProdInfoPage/airPurifiers/hc450Page/hc450Page.jsx";
import { ProductsCategoryPage } from "./pages/products-category/productsCategoryPage.jsx";
import { AboutUsPage } from "./pages/aboutUsPage/aboutUsPage.jsx";
import { ReviewsPage } from "./pages/reviews/reviewsPage.jsx";

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
    const pathsWithProdInfoBody = [
      "/zIdNZ810UKT",
      "/zIdAZ3002UK",
      "/zIdAZ3000UKT",
      "/zIdNV602UK",
      "/zIdNZ691UKT",
      "/zIdIP1251UKT",
      "/zIdIZ202UKT",
      "/zIdIZ202UKTDB",
      "/zIdIZ400UKT",
      "/zIdIZ202UKT",
      "/zIdIZ202UKTDB",
      "/zIdIZ202UK",
      "/zIdIZ420UKTDB",
      "/zIdHD731UK",
      "/zIdHD752UK",
      "/zIdHD731202UK",
      "/zIdHP300UK",
      "/zIdHP150UK",
      "/zIdHC450",
    ];

    const isProdInfoPage = pathsWithProdInfoBody.includes(location.pathname);
    const isProdCategoryPage = location.pathname === "/products-category";

    if (isProdInfoPage) {
      document.body.classList.add("prodInfo_body");
    } else {
      document.body.classList.remove("prodInfo_body");
    }

    if (isProdCategoryPage) {
      document.body.classList.add("prodCategory_body");
    } else {
      document.body.classList.remove("prodCategory_body");
    }

    return () => {
      document.body.classList.remove("prodInfo_body");
      document.body.classList.remove("prodCategory_body");
    };
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
        <Route
          path="/offers"
          element={
            <OffersPage addToCart={addToCart} cart={cart} setCart={setCart} />
          }
        />
        <Route
          path="/corded-hoovers"
          element={
            <CordedVacPage
              addToCart={addToCart}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/cordless-hoovers"
          element={
            <CordlessVacPage
              addToCart={addToCart}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/hairDry-page"
          element={
            <HairDryPage addToCart={addToCart} cart={cart} setCart={setCart} />
          }
        />
        <Route
          path="/airPurifier-page"
          element={
            <AirPurifierPage
              addToCart={addToCart}
              cart={cart}
              setCart={setCart}
            />
          }
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
        <Route
          path="/zIdIP1251UKT"
          element={
            <IP1251UKTPage
              setCart={setCart}
              addToCart={addToCart}
              cart={cart}
            />
          }
        />
        <Route
          path="/zIdIZ202UKT"
          element={
            <IZ202UKTPage setCart={setCart} addToCart={addToCart} cart={cart} />
          }
        />
        <Route
          path="/zIdIZ202UKTDB"
          element={
            <IZ202UKTDBPage
              setCart={setCart}
              addToCart={addToCart}
              cart={cart}
            />
          }
        />
        <Route
          path="/zIdIZ400UKT"
          element={
            <IZ400UKTPage setCart={setCart} addToCart={addToCart} cart={cart} />
          }
        />
        <Route
          path="/zIdIZ202UK"
          element={
            <IZ202UKPage setCart={setCart} addToCart={addToCart} cart={cart} />
          }
        />
        <Route
          path="/zIdIZ420UKTDB"
          element={
            <IZ420UKTDBPage
              setCart={setCart}
              addToCart={addToCart}
              cart={cart}
            />
          }
        />
        <Route
          path="/zIdHD731UK"
          element={
            <HD731UKPage setCart={setCart} addToCart={addToCart} cart={cart} />
          }
        />
        <Route
          path="/zIdHD752UK"
          element={
            <HD752UKPage setCart={setCart} addToCart={addToCart} cart={cart} />
          }
        />
        <Route
          path="/zIdHD731202UK"
          element={
            <HD731202UKPage
              setCart={setCart}
              addToCart={addToCart}
              cart={cart}
            />
          }
        />
        <Route
          path="/zIdHP300UK"
          element={
            <HP300UKPage setCart={setCart} addToCart={addToCart} cart={cart} />
          }
        />
        <Route
          path="/zIdHP150UK"
          element={
            <HP150UKPage setCart={setCart} addToCart={addToCart} cart={cart} />
          }
        />
        <Route
          path="/zIdHC450"
          element={
            <HC450UKPage setCart={setCart} addToCart={addToCart} cart={cart} />
          }
        />
        <Route
          path="/products-category"
          element={
            <ProductsCategoryPage
              setCart={setCart}
              addToCart={addToCart}
              cart={cart}
            />
          }
        />
        <Route
          path="/about-us"
          element={<AboutUsPage setCart={setCart} cart={cart} />}
        />
        <Route
          path="/reviews"
          element={<ReviewsPage setCart={setCart} cart={cart} />}
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
