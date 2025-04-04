import React, { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51R3ucfH2BsXmtLzxkrtsJZiYcdu32o0kdId1sIhjSMjsxiIRJLrpwKSB2sBaUVt6JlNp5r1f2kY1AZT2lZuCyyqC00cS5tIR23"
);

export const PaymentForm = () => {
  const fetchClientSecret = useCallback(() => {
    return fetch("/create-checkout-session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};
