import React, { useState } from "react";

const IncomeForm = ({ dispatch }) => {
  const [value, setValue] = useState("");
  const onIncome = (e) => {
    e.preventDefault();
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      alert("Please Enter Valid Number.");
      setValue("");
    } else {
      dispatch({ type: "INCOME", value: numValue });
      setValue("");
    }
  };
  return (
    <form onSubmit={onIncome}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Add Income</button>
    </form>
  );
};

export default IncomeForm;
