import { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const ComponentDisplay = ({ name, price, prodImg }) => {
  let [amount, setAmount] = useState(1);
  let [state, setState] = useState("del");
  let [pret, setPret] = useState(price);
  let [visibility, setVisibility] = useState("none");

  useEffect(() => {
    if (amount > 1) {
      setState("-");
    } else {
      setState("del");
    }

    setPret(price * amount);
  }, [amount, price]);

  function changeDecreaseState() {
    if (state === "del") {
      console.log("back to prod info");
    } else if (state === "-") {
      setAmount((prevAmount) => Math.max(prevAmount - 1, 1));
    }
  }

  function changeIncreaseState() {
    setAmount((prevAmount) => prevAmount + 1);
    if (amount === 5) {
      setAmount(Math.max(5));

      setVisibility("block");

      setInterval(() => setVisibility("none"), 5000);
    }
  }

  return (
    <>
      <div className="big_wrapper">
        <div
          className="img_position"
          style={{
            backgroundImage: `url(${prodImg})`,
          }}
        ></div>
        <div className="wrapper">
          <div>
            <h2>{name}</h2>
          </div>
          <div className="amount_container_wrapper">
            <div className="amount_container">
              <button onClick={changeDecreaseState}>{state}</button>

              <span>{amount}</span>

              <button onClick={changeIncreaseState}>+</button>
            </div>

            <h4>${pret.toFixed(2)}</h4>
          </div>
        </div>
      </div>
      <div
        className="maxReached_container"
        style={{ display: `${visibility}` }}
      >
        <h1 className="maxReached_message">max capacity reached</h1>
      </div>
      <hr style={{ marginTop: "30px" }} />
      <div className="subtotal_container">
        <h4>
          Subtotal ({amount} {amount > 1 ? "items" : "item"})
        </h4>

        <h4>${pret.toFixed(2)}</h4>
      </div>
      <div>
        <div className="checkout_container">
          <div>
            <button onClick={() => console.log("went to checkout")}>
              checkout
            </button>
          </div>
          <div className="optionsBtn_container">
            <Link onClick={() => console.log("view cart btn clicked")}>
              view cart
            </Link>
            <Link
              onClick={() => console.log("continue shopping btn clicked")}
              to={"/products"}
            >
              continue shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
