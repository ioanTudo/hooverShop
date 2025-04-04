import { Link } from "react-router-dom";
import "./paymentConfirmation.css";

export const Success = () => {
  return (
    <div className="successPayment_container">
      <div className="successText_container">
        <div>
          <div class="screenAlert-icon screenAlert-success animate">
            <span class="screenAlert-line screenAlert-tip animateSuccessTip"></span>
            <span class="screenAlert-line screenAlert-long animateSuccessLong"></span>
            <div class="screenAlert-placeholder"></div>
            <div class="screenAlert-fix"></div>
          </div>
        </div>
        <h3>
          We appreciate your business! A confirmation email will be sent. If you
          have any questions, please email{" "}
          <Link href="mailto:orders@example.com">orders@example.com</Link>.
        </h3>
        <div>
          <Link className="backButton" to={"/"}>
            <span>Back to main menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
