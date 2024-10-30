import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { CheckoutPage } from "./pages/checkoutPage/checkoutPage";
import { Header } from "./component/header/header";
import { HomePage } from "./pages/home/homePage";
import { ProductsPage } from "./pages/products/productsPage";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products-page" element={<ProductsPage />} />
            <Route path="/checkout-page" element={<CheckoutPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
