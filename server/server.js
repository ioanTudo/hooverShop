const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51R3ucfH2BsXmtLzxeorx9laiz1RrF53KkwDuIg8migmYBxzx1gXChs1WDV1IluGAzq3qE0lN341VZVmxOLkEbYMF00SvCYzZ2R"
);
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const serviceAccount = require("./serviceAccountKey.json");
const endpointSecret =
  "whsec_a21d0e9051c7366091d7792a5db24edfa7e965b0e6b6bc9ecfb03dcb6a08fad4";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

const app = express();
const PORT = 4242;
const YOUR_DOMAIN = "http://localhost:3000";

app.use(cors({ origin: YOUR_DOMAIN }));
app.use("/webhook", bodyParser.raw({ type: "application/json" }));
app.use(bodyParser.json());

app.post("/create-checkout-session", async (req, res) => {
  try {
    const idToken = req.headers.authorization?.split("Bearer ")[1];
    if (!idToken) return res.status(401).send("Unauthorized");

    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    const email = decodedToken.email;

    const userRef = db.collection("users").doc(uid);
    const userDoc = await userRef.get();
    let stripeCustomerId = userDoc.exists
      ? userDoc.data()?.stripeCustomerId
      : null;

    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email,
        metadata: { firebaseUID: uid },
      });
      stripeCustomerId = customer.id;
      await userRef.set({ stripeCustomerId }, { merge: true });
    }

    const { cartItems } = req.body;
    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const line_items = cartItems.map((item) => ({
      price: item.price_id,
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer: stripeCustomerId,
      line_items,
      mode: "payment",
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/cancel`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("🔥 Stripe error:", error);
    res
      .status(500)
      .json({ error: "Checkout session failed", details: error.message });
  }
});

app.post("/webhook", async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const customerId = session.customer;

    const customer = await stripe.customers.retrieve(customerId);
    const firebaseUID = customer.metadata.firebaseUID;

    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
      limit: 100,
    });

    const products = lineItems.data.map((item) => ({
      name: item.description,
      quantity: item.quantity,
      amount_subtotal: item.amount_subtotal,
    }));

    await db.collection("orders").add({
      uid: firebaseUID,
      stripeCustomerId: customerId,
      amount_total: session.amount_total,
      payment_status: session.payment_status,
      products,
      created: admin.firestore.Timestamp.now(),
    });

    console.log("✅ Order saved with product names");
  }

  res.status(200).json({ received: true });
});

app.get("/get-orders", async (req, res) => {
  try {
    const idToken = req.headers.authorization?.split("Bearer ")[1];
    if (!idToken) return res.status(401).send("Unauthorized");

    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;

    console.log("✅ GET /get-orders for UID:", uid);

    const ordersSnapshot = await db
      .collection("orders")
      .where("uid", "==", uid)
      .orderBy("created", "desc")
      .get();

    const orders = ordersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("📦 Orders found:", orders.length);
    res.json(orders);
  } catch (error) {
    console.error("🔥 Error getting user orders:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch orders", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
