import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

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
        {filteredExpenses.length === 0 && <p>No expenses found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} expenseitem={expense} /> // key prop, allows us add a unique key to a list being rendered this helps react to uniquely place list item during rendering getting rid of performance issues and bugs.
          ))}
        {/*Using a function to dynamically display all values of the expenses array as ExpensesItem. Any changes is the array are automatically updated*/}
      </Card>
    </div>
  );
}

export default Expenses;
