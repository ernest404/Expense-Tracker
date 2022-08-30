import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  function onSaveFilterHandler(selection) {
    console.log(selection);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onfilter={onSaveFilterHandler} />
        {props.expensebody.map((expense) => (
          <ExpenseItem expense={expense} />
        ))}{" "}
        {/*Using a function to dynamically display all values of the expenses array as ExpensesItem. Any changes is the array are automatically updated*/}
      </Card>
    </div>
  );
}

export default Expenses;
