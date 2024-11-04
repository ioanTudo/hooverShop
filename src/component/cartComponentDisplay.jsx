import { useEffect, useState } from "react";
import "../App.css";

export const CartComponentDisplay = ({ name, price, prodImg }) => {
  const [amount, setAmount] = useState(1);
  const [state, setState] = useState("del");
  const [pret, setPret] = useState(price);
  const [visibility, setVisibility] = useState("none");

  function deleteItem(item, index) {
    item.splice(index);
  }

  useEffect(() => {
    if (amount > 1) {
      setState("-");
    } else {
      setState("del");
    }

    setPret(price * amount || 0);
  }, [amount, price]);

  function changeDecreaseState() {
    if (state === "del") {
      deleteItem();
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

      setTimeout(() => setVisibility("none"), 5000);
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

            <h4>${pret ? pret.toFixed(2) : "0.00"}</h4>
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
    </>
  );
};
