// this is the main or root or special component: all other components are nested to it.

import Expenses from "./components/Expenses/Expenses"; //to use a component in another component we have to import it.
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const DUMMYEXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMYEXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    }); /*we use this function when we are updating the previous state */
    console.log(expense);
  }
  return (
    //returns jsx a htmlish code: JavaScript XML which is transformed to JS before rendering.
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesList={expenses} />
      {/*Lifted expenses data up from Expenseform to NewExpense to App the down to Expenses*/}
    </div>
  );
}

export default App; //we export this component for use in other files
