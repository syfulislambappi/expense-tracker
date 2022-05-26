import React, { useReducer } from "react";
import Expense from "../Expense/Expense";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import Income from "../Income/Income";
import IncomeForm from "../IncomeForm/IncomeForm";
const initialState = {
  income: 0,
  expense: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "EXPENSE":
      return { ...state, expense: state.expense + action.value };
    case "INCOME":
      return { ...state, income: state.income + action.value };
    default:
      return state;
  }
};

const Main = () => {
  const [accounts, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Balance: {accounts.income - accounts.expense}
      <ExpenseForm dispatch={dispatch} />
      <IncomeForm dispatch={dispatch} />
      <Income income={accounts.income} />
      <Expense expense={accounts.expense} />
    </div>
  );
};

export default Main;
