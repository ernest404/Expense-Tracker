import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // You can have multiple states in one component
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // alternatively
  //   const [userInput, setUserInput] = useState({
  //     enterTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value); //React passes eventlistener value to the handler function
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value); //the listened value is always a string
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // If your state depends on the previous state use this instead:
    // Keeps the state snapshots up to date, the above

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); //executes function defined in the parent component: NewExpense
    setEnteredTitle(""); //set the new value to back to initial state
    setEnteredAmount("");
    setEnteredDate("");
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //passed the new blank value back
            onChange={titleChangeHandler}
          />{" "}
          {/* */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>{" "}
        {/*The form outputs an event whenever the submit button is pressed */}
      </div>
    </form>
  );
}

export default ExpenseForm;
