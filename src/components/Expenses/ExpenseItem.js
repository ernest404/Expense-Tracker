import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// We can make components reusable and display different values by using parameters called props.
// We can pass data to components by passing it in an attribute
function ExpenseItem(props) {
  // props is an object of attributes

  return (
    //Multiple elements should be put in brackets. only one root element is allowed per return statement, no side by side elements.
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      {/*We are relying the date from App to ExpenseDate */}
      {/*The key used has to match the attribute used to pass the data */}
      {/*Inside curly braces you can run and display values from JS code*/}
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
