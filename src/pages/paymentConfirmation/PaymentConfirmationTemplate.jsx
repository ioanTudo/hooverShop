import { Link } from "react-router-dom";
import "./paymentConfirmation.css";

export const PaymentConfirmationTemplate = ({ isSucces, isCanceled }) => {
  return (
    <div
      className={
        isSucces
          ? "successPayment_container"
          : isCanceled
          ? "cancelPayment_container"
          : ""
      }
    >
      <div
        className={
          isSucces
            ? "successText_container"
            : isCanceled
            ? "cancelText_container"
            : ""
        }
      >
        <div>
          <div
            className={
              isSucces
                ? "screenAlert-icon screenAlert-success animate"
                : isCanceled
                ? "screenAlert-icon screenAlert-error animate"
                : ""
            }
          >
            {isCanceled && (
              <span className="screenAlert-x-mark">
                <span className="screenAlert-line screenAlert-left animateXLeft"></span>
                <span className="screenAlert-line screenAlert-right animateXRight"></span>
              </span>
            )}
            {isSucces && (
              <span>
                <span className="screenAlert-line screenAlert-tip animateSuccessTip"></span>
                <span className="screenAlert-line screenAlert-long animateSuccessLong"></span>
              </span>
            )}
            <div className="screenAlert-placeholder"></div>
            <div className="screenAlert-fix"></div>
          </div>
        </div>

        {isSucces && (
          <h3>
            We appreciate your business! A confirmation email will be sent. If
            you have any questions, please email{" "}
            <a href="mailto:orders@example.com">orders@example.com</a>.
          </h3>
        )}

        {isCanceled && <h3>Order was canceled</h3>}

        <div>
          <Link className="backButton" to="/">
            <span>Back to main menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
