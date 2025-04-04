import { useState, useEffect, useContext } from "react";
import "../App.css";
import { LocalAmount } from "./localAmountProvider.jsx";

export const CartComponentDisplay = ({
  name,
  price = 0,
  image,
  onDelete,
  onSale,
  salePrice,
  id,
}) => {
  const { amount, setAmountForId } = useContext(LocalAmount);
  const itemAmount = amount[id] || 1;
  const [state, setState] = useState("del");
  const [totalPrice, setTotalPrice] = useState(0);
  const [visibility, setVisibility] = useState("none");
  const [deleteMessageVisibility, setDeleteMessageVisibility] =
    useState("none");

  useEffect(() => {
    setState(itemAmount > 1 ? "-" : "del");
    const effectivePrice = onSale ? salePrice : price;
    setTotalPrice((effectivePrice || 0) * itemAmount);

    console.log("ID:", id, "itemAmount:", itemAmount, "amount object:", amount);
  }, [itemAmount, price, salePrice, onSale]);

  const handleDecrease = () => {
    if (state === "del") {
      setDeleteMessageVisibility("block");
      document.body.style.overflow = "hidden";
    } else {
      const newAmount = Math.max(itemAmount - 1, 1);
      setAmountForId(id, newAmount);
    }
  };

  const handleIncrease = () => {
    if (itemAmount < 5) {
      setAmountForId(id, itemAmount + 1);
    }

    if (itemAmount === 4) {
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
      <div key={id} className="big_wrapper">
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
              <button onClick={() => handleDecrease(id)}>{state}</button>
              <span>{itemAmount}</span>
              <button disabled={itemAmount === 5} onClick={handleIncrease}>
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
