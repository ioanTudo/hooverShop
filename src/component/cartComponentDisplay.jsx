import { useState, useEffect } from "react";
import "../App.css";

export const CartComponentDisplay = ({
  name,
  price,
  image,
  amount,
  onDelete,
  onAmountChange,
}) => {
  const [localAmount, setLocalAmount] = useState(amount || 1);
  const [state, setState] = useState("del");
  const [totalPrice, setTotalPrice] = useState(price);
  const [visibility, setVisibility] = useState("none");
  const [deleteMessageVisibility, setDeleteMessageVisibility] =
    useState("none");

  useEffect(() => {
    if (localAmount > 1) {
      setState("-");
    } else {
      setState("del");
    }

    setTotalPrice(price * localAmount);
  }, [localAmount, price]);

  const handleDecrease = () => {
    console.log(localAmount);
    if (state === "del") {
      setDeleteMessageVisibility("block");
    } else if (state === "-") {
      setLocalAmount((prev) => {
        const newAmount = Math.max(prev - 1, 1);
        onAmountChange(newAmount);
        return newAmount;
      });
    }
  };

  const handleIncrease = () => {
    if (localAmount < 5) {
      console.log(localAmount);
      setLocalAmount((prev) => {
        const newAmount = prev + 1;
        onAmountChange(newAmount);
        return newAmount;
      });
    }
    if (localAmount === 4) {
      setVisibility("block");
      setTimeout(() => setVisibility("none"), 5000);
    }
  };

  const handleDeleteConfirm = () => {
    onDelete();
    setDeleteMessageVisibility("none");
  };

  const handleDeleteCancel = () => {
    setDeleteMessageVisibility("none");
  };

  return (
    <>
      <div className="big_wrapper">
        <div
          className="img_position"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div className="wrapper">
          <div>
            <h2>{name}</h2>
          </div>
          <div className="amount_container_wrapper">
            <div className="amount_container">
              <button onClick={handleDecrease}>{state}</button>
              <span>{localAmount}</span>
              <button disabled={localAmount === 5} onClick={handleIncrease}>
                +
              </button>
            </div>
            <h4>${totalPrice.toFixed(2)}</h4>
          </div>
        </div>
      </div>
      <div className="maxReached_container" style={{ display: visibility }}>
        <h1 className="maxReached_message">Max capacity reached</h1>
      </div>
      <div
        style={{ display: deleteMessageVisibility }}
        className="delete_message_container"
      >
        <h2>Are you sure you want to delete the item?</h2>
        <div className="deleteButtons_container">
          <button onClick={handleDeleteConfirm}>Yes</button>
          <button onClick={handleDeleteCancel}>No</button>
        </div>
      </div>
      <hr style={{ marginTop: "30px" }} />
    </>
  );
};
