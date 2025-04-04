const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51R3ucfH2BsXmtLzxeorx9laiz1RrF53KkwDuIg8migmYBxzx1gXChs1WDV1IluGAzq3qE0lN341VZVmxOLkEbYMF00SvCYzZ2R"
);

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

const YOUR_DOMAIN = "http://localhost:3000";

app.post("/create-checkout-session", async (req, res) => {
  try {
    console.log("Received request:", req.body);

    if (!req.body.cartItems || req.body.cartItems.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const line_items = req.body.cartItems.map((item) => {
      if (!item.price_id) {
        throw new Error("Missing price_id for item: " + JSON.stringify(item));
      }

      return {
        price: item.price_id,
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/cancel`,
      locale: "en",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({
      error: "Failed to create checkout session",
      details: error.message,
    });
  }
});

app.listen(4242, () => console.log("🚀 Running on port 4242"));
