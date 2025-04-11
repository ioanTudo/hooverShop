import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StrictMode, useState } from "react";

import { CheckoutPage } from "./pages/checkoutPage/checkoutPage";
import { HomePage } from "./pages/home/homePage";

import { OffersPage } from "./pages/offers/offersPage";
import { ProductsCategoryPage } from "./pages/products-category/productsCategoryPage.jsx";
import { AboutUsPage } from "./pages/aboutUsPage/aboutUsPage.jsx";
import { ReviewsPage } from "./pages/reviews/reviewsPage.jsx";
import { CleaningTipsPage } from "./pages/cleaningTipsPage/cleaningTipsPage.jsx";

import { CartContext } from "./component/contexts";
import { LocalAmountProvider } from "./component/localAmountProvider";

import { Header } from "./component/header/header.jsx";
import { FooterContainer } from "./component/footer/footerContainer.jsx";

import {
  PRODUCTS,
  PRODUCTS_AIRPURIFIERS,
  PRODUCTS_CORDLESS,
  PRODUCTS_HAIRDRY,
} from "./data.js";

import { TemplatePage } from "./pages/TemplatePage/TemplatePage.jsx";
import { TemplateProdInfoPage } from "./pages/TemplateProdInfoPage/TemplateProdInfoPage.jsx";
import { Success } from "./pages/paymentConfirmation/Success.jsx";
import { Cancel } from "./pages/paymentConfirmation/Cancel.jsx";

import { Dashboard } from "./pages/dashboard/dashboard.jsx";
import { AuthForm } from "./component/auth/authForm.jsx";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function App() {
  const cartHook = useState([]);

  const [confirmationRegistration, setConfirmationRegistration] =
    useState(null);
  const [errorRegistration, setErrorRegistration] = useState(null);
  const [loadingRegistration, setLoadingRegistration] = useState(false);

  const [loginError, setLoginError] = useState(null);
  const [loadingLogIn, setLoadingLogIn] = useState(false);
  const [confirmationLogIn, setConfirmationLogin] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StrictMode>
      <div className="App">
        <CartContext.Provider value={cartHook}>
          <LocalAmountProvider>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/offers" element={<OffersPage />} />
              <Route
                path="/product/:productId/:productName"
                element={<TemplateProdInfoPage />}
              />
              <Route
                path="/corded-hoovers"
                element={
                  <TemplatePage title="corded hoovers" prodType={PRODUCTS} />
                }
              />
              <Route
                path="/cordless-hoovers"
                element={
                  <TemplatePage
                    title="cordless hoovers"
                    prodType={PRODUCTS_CORDLESS}
                  />
                }
              />
              <Route
                path="/airPurifier-page"
                element={
                  <TemplatePage
                    title="air purifiers"
                    prodType={PRODUCTS_AIRPURIFIERS}
                  />
                }
              />
              <Route
                path="/hairDry-page"
                element={
                  <TemplatePage
                    title="hair dryers"
                    prodType={PRODUCTS_HAIRDRY}
                  />
                }
              />

              <Route
                path="/register"
                element={
                  <AuthForm
                    title={"Register"}
                    authMethod={createUserWithEmailAndPassword}
                    confirmation={confirmationRegistration}
                    errorMsg={errorRegistration}
                    loading={loadingRegistration}
                    setLoading={setLoadingRegistration}
                    setConfirmation={setConfirmationRegistration}
                    setErrorMsg={setErrorRegistration}
                    loadingMsg={"Registering..."}
                    btnText={"Register"}
                    isNavigatingToDashboard={false}
                    showLoginPath={true}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    registrationMsgConfirmation={"Account created succesfully"}
                    isRegisteringAcc={true}
                  />
                }
              />

              <Route
                path="/login"
                element={
                  <AuthForm
                    title={"Log in"}
                    authMethod={signInWithEmailAndPassword}
                    confirmation={confirmationRegistration}
                    setConfirmation={() => confirmationLogIn}
                    errorMsg={loginError}
                    loading={loadingLogIn}
                    setLoading={setLoadingLogIn}
                    setErrorMsg={setLoginError}
                    loadingMsg={"Logging in..."}
                    btnText={"Log in"}
                    isNavigatingToDashboard={true}
                    showLoginPath={false}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    registrationMsgConfirmation={setConfirmationLogin}
                    isRegisteringAcc={false}
                  />
                }
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/checkout-page" element={<CheckoutPage />} />
              <Route
                path="/products-category"
                element={<ProductsCategoryPage />}
              />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/cleaning-tips" element={<CleaningTipsPage />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
              <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
            <FooterContainer />
          </LocalAmountProvider>
        </CartContext.Provider>
      </div>
    </StrictMode>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
