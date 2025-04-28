import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

import "./dashboard.css";

export const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = getAuth().currentUser;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!user) throw new Error("User not authenticated");

        const idToken = await user.getIdToken();
        const res = await fetch("http://localhost:4242/get-orders", {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch orders");
        const data = await res.json();

        if (!Array.isArray(data)) throw new Error("Orders must be an array");

        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="dashboard_container">
      <div className="dashboard_header">
        <h2 className="dashTitle">Hello, {user ? user.email : "Guest"}</h2>

        <div className="orders_bigWrapper">
          <h2>My Orders</h2>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          {orders.length === 0 && !loading ? (
            <p>No orders found.</p>
          ) : (
            <div className="orders_wrapper">
              {orders.map((item, index) => (
                <div className="orders_container" key={index}>
                  <div>
                    <p>Order reference: {index}</p>
                    {item.products?.map((product, idx) => (
                      <p key={idx}>Product: {product.name}</p>
                    ))}

                    <p>{item.quantity}</p>
                    <p>Total: ${item.amount_total.toFixed(2) / 100}</p>
                    <p>Status: {item.payment_status}</p>

                    {item.products?.map((itm, idx) => (
                      <p key={idx}>Quantity: {itm.quantity}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
