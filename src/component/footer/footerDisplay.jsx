import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const FooterDisplay = ({ name, submenu }) => {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handlePageSelect = (pageName) => {
    console.log(`Page selected in footer: ${pageName}`);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      email,
      from_name: "HooverShop Team",
      message: "Thank you for subscribing!",
    };

    console.log("Sending email with templateParams:", templateParams);

    emailjs
      .send(
        "service_o8tzk0o",
        "template_9fhh6if",
        templateParams,
        "MJ0VhBFZ7avKklFyo"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatusMessage("Subscription successful! Thank you.");
          setTimeout(() => setStatusMessage(""), 5000);
        },
        (error) => {
          console.error("FAILED...", error);
          setStatusMessage("Subscription failed! Please try again.");
          setTimeout(() => setStatusMessage(""), 5000);
        }
      );

    setEmail("");
  };

  return (
    <div>
      <h4>{name}</h4>
      {submenu && submenu.length > 0 && (
        <ul className="footer_submenu">
          {submenu.map((item) => (
            <li className="footer_nav_links" key={item.id}>
              <Link
                to={item.pathLink}
                onClick={() => handlePageSelect(item.name)}
                className="submenu_link"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {name === "join our mailing list" && (
        <div className="footer_form_container">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          {statusMessage && <p>{statusMessage}</p>}
        </div>
      )}
    </div>
  );
};
