import { useForm } from "react-hook-form";
import "./paymentPage.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const PaymentForm = ({ cart = [], setCart }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [stateContent, setStateContent] = useState();

  const handleOrderSubmit = (data) => {
    setLoading(true);
    setStateContent("");
    setTimeout(() => setLoading(false), 3000);
    setCart([]);

    const productDetails = cart.map((item) => item.name).join("\n");

    const templateParams = {
      cxName: data.name,
      email: data.email,
      prodID: productDetails,
      amount: cart.length,
      price: cart
        .reduce(
          (total, item) =>
            total +
            (item.onSale ? item.salePrice : item.price) * (item.amount || 1),
          0
        )
        .toFixed(2),
      streetNo: data.streetNo,
      postCode: data.postCode,
      phoneNumber: data.phoneNumber,
      paymentMethod: data.paymentMethod,
    };

    console.log("Sending email with templateParams:", templateParams);

    emailjs
      .send(
        "service_o8tzk0o",
        "template_s537fvh",
        templateParams,
        "MJ0VhBFZ7avKklFyo"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatusMessage("Order was sent! Thank you.");
          setTimeout(() => setStatusMessage(""), 5000);
        },
        (error) => {
          console.error("FAILED...", error);
          setStatusMessage("Oops! Something went wrong. Please try again.");
          setTimeout(() => setStatusMessage(""), 5000);
        }
      );
  };

  return (
    <div className="paymentForm_container">
      <form onSubmit={handleSubmit(handleOrderSubmit)}>
        <div className="cxInfo_wrapper">
          <div className="cxInfo_container cxEmail_container">
            {errors.email && (
              <span className="error_msg">Email is required.</span>
            )}
            <input
              disabled={cart.length === 0}
              {...register("email", { required: true })}
              placeholder="Email Address"
              type="email"
              value={stateContent}
            />
          </div>
          <div className="cxInfo_container cxName_container">
            {errors.name && (
              <span className="error_msg">Name is required.</span>
            )}
            <input
              disabled={cart.length === 0}
              {...register("name", { required: true })}
              placeholder="Name"
              type="text"
              value={stateContent}
            />
            {errors.lastName && (
              <span className="error_msg">Last Name is required.</span>
            )}
            <input
              disabled={cart.length === 0}
              {...register("lastName", { required: true })}
              placeholder="Last Name"
              type="text"
              value={stateContent}
            />
          </div>
          <div className="cxInfo_container cxPhone_container">
            {errors.phoneNumber && (
              <span className="error_msg">Phone number is required.</span>
            )}
            <input
              disabled={cart.length === 0}
              {...register("phoneNumber", { required: true })}
              placeholder="Phone Number"
              type="tel"
              value={stateContent}
            />
          </div>
          <div className="cxInfo_container cxAdress_container">
            {errors.streetNo && (
              <span className="error_msg">Street name is required.</span>
            )}
            <input
              disabled={cart.length === 0}
              {...register("streetNo", { required: true })}
              placeholder="Street Name"
              type="text"
              value={stateContent}
            />
            {errors.postCode && (
              <span className="error_msg">Post code is required.</span>
            )}
            <input
              disabled={cart.length === 0}
              {...register("postCode", { required: true })}
              placeholder="Post Code"
              type="text"
              value={stateContent}
            />
          </div>
        </div>

        <div className="paymentMethod_container">
          <h3>Choose your payment method</h3>
          <div className="radio_container">
            <input
              disabled={cart.length === 0}
              type="radio"
              {...register("paymentMethod", { required: true })}
              value="Credit Card"
              id="CC"
            />
            <label htmlFor="CC">Credit Card</label>
          </div>
          <div className="radio_container">
            <input
              disabled={cart.length === 0}
              type="radio"
              {...register("paymentMethod", { required: true })}
              value="PayPal"
              id="PP"
            />
            <label htmlFor="PP">PayPal</label>
          </div>
          <div className="radio_container">
            <input
              disabled={cart.length === 0}
              type="radio"
              {...register("paymentMethod", { required: true })}
              value="Bank Transfer"
              id="BT"
            />
            <label htmlFor="BT">Bank Transfer</label>
          </div>
          <div className="radio_container">
            <input
              disabled={cart.length === 0}
              type="radio"
              {...register("paymentMethod", { required: true })}
              value="Apple Pay"
              id="AP"
            />
            <label htmlFor="AP">Apple Pay</label>
          </div>
          <div className="radio_container">
            <input
              disabled={cart.length === 0}
              type="radio"
              {...register("paymentMethod", { required: true })}
              value="Google Pay"
              id="GP"
            />
            <label htmlFor="GP">Google Pay</label>
          </div>
          {errors.paymentMethod && (
            <span className="error_msg">Please select a payment method.</span>
          )}
        </div>

        <div className="submitBtn_container">
          {loading ? (
            <button className="submitBtn" disabled>
              <i className="fa fa-spinner fa-spin"></i>
            </button>
          ) : (
            <button
              disabled={cart.length === 0}
              type="submit"
              className="submitBtn"
            >
              Submit Order
            </button>
          )}
          {statusMessage && <p>{statusMessage}</p>}
        </div>
      </form>
    </div>
  );
};
