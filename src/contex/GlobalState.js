import react, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

export const GlobalContex = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "Delete_Transaction",
      payload: id,
    });
  }

  function AddTransaction(transaction) {
    dispatch({
      type: "Add_Transaction",
      payload: transaction,
    });
  }

  return (
    <GlobalContex.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        AddTransaction,
      }}
    >
      {children}
    </GlobalContex.Provider>
  );
};
