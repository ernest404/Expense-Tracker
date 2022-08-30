import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// We can make components reusable and display different values by using parameters called props.
// We can pass data to components by passing it in an attribute
function ExpenseItem(props) {
  // props is an object of attributes

  // const [title, setTitle] = useState(props.expenseitem.title); //takes the initial state(starting point) and returns the current value, and a function used to set a new value
  // //state is handled per component-instance bases.
  // const clickHandler = () => {
  //   setTitle("updated!"); //Only one instance is updated.
  // };

  return (
    //Multiple elements should be put in brackets. only one root element is allowed per return statement, no side by side elements.
    <Card className="expense-item">
      <ExpenseDate date={props.expenseitem.date} />
      {/*We are relying the date from App to ExpenseDate */}
      {/*The key used has to match the attribute used to pass the data */}
      {/*Inside curly braces you can run and display values from JS code*/}
      <div className="expense-item__description">
        <h2>{props.expenseitem.title}</h2>
        <div className="expense-item__price">${props.expenseitem.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
      {/*eventlisteners start with on, we end with handler to functions that are tied to eventlisteners */}
    </Card>
  );
}

export default ExpenseItem;
