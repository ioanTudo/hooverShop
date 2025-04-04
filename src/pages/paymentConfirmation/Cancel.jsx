import { Link } from "react-router-dom";
import "./paymentConfirmation.css";

export const Cancel = () => {
  return (
    <div className="cancelPayment_container">
      <div className="cancelText_container">
        <div>
          <div class="screenAlert-icon screenAlert-error animate">
            <span class="screenAlert-x-mark">
              <span class="screenAlert-line screenAlert-left animateXLeft"></span>
              <span class="screenAlert-line screenAlert-right animateXRight"></span>
            </span>
            <div class="screenAlert-placeholder"></div>
            <div class="screenAlert-fix"></div>
          </div>
        </div>
        <h3>Order was canceled</h3>
        <div>
          <Link className="backButton" to={"/"}>
            <span>Back to main menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
