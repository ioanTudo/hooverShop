import { createContext, useState } from "react";

export const LocalAmount = createContext();

export const LocalAmountProvider = ({ children }) => {
  const [amount, setAmount] = useState({});

  const setAmountForId = (id, value) => {
    setAmount((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <LocalAmount.Provider value={{ amount, setAmountForId }}>
      {children}
    </LocalAmount.Provider>
  );
};
