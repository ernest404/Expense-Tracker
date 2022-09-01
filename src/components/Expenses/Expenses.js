import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  function onSaveFilterHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expensesList.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  console.log(props.expensesList);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onfilter={onSaveFilterHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList item={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
