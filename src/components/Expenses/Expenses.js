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
        <ExpenseItem expense={props.expenses[0]} />
        <ExpenseItem expense={props.expenses[1]} />
        <ExpenseItem expense={props.expenses[2]} />
        <ExpenseItem expense={props.expenses[3]} />
      </Card>
    </div>
  );
}

export default Expenses;
