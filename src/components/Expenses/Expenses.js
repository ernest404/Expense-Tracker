import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  function onSaveFilterHandler(selection) {
    console.log(selection);
  }
  console.log(props.expensesList);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onfilter={onSaveFilterHandler} />
        {props.expensesList.map((expense) => (
          <ExpenseItem expenseitem={expense} />
        ))}{" "}
        {/*Using a function to dynamically display all values of the expenses array as ExpensesItem. Any changes is the array are automatically updated*/}
      </Card>
    </div>
  );
}

export default Expenses;
