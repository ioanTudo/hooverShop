import { useState, useEffect } from "react";
import "../App.css";

export const CartComponentDisplay = ({
  name,
  price = 0,
  image,
  amount = 1,
  onDelete,
  onAmountChange,
  onSale,
  salePrice,
}) => {
  const [localAmount, setLocalAmount] = useState(amount);
  const [state, setState] = useState("del");
  const [totalPrice, setTotalPrice] = useState(price * amount);
  const [visibility, setVisibility] = useState("none");
  const [deleteMessageVisibility, setDeleteMessageVisibility] =
    useState("none");

  useEffect(() => {
    setState(localAmount > 1 ? "-" : "del");

    const effectivePrice = onSale ? salePrice : price;
    setTotalPrice((effectivePrice || 0) * localAmount);
  }, [localAmount, price, salePrice, onSale]);

  const handleDecrease = () => {
    if (state === "del") {
      setDeleteMessageVisibility("block");
      document.body.style.overflow = "hidden";
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
    document.body.style.overflow = "visible";
  };

  const handleDeleteCancel = () => {
    setDeleteMessageVisibility("none");
    document.body.style.overflow = "visible";
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
            <h4>${totalPrice ? totalPrice.toFixed(2) : "N/A"}</h4>
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
