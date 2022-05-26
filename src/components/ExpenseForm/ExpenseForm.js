import React, { useState } from "react";

const ExpenseForm = ({ dispatch }) => {
  const [value, setValue] = useState("");
  const onExpense = (e) => {
    e.preventDefault();
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      alert("Enter Valid Number.");
      setValue("");
    } else {
      dispatch({ type: "EXPENSE", value: numValue });
      setValue("");
    }
  };
  return (
    <form onSubmit={onExpense}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
