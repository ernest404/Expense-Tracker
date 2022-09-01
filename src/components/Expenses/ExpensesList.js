import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.item.length === 0) {
    return <p className="expenses-list__fallback">No expense found</p>;
  }
  return props.item.map((expense) => (
    <ul className="expenses-list">
      <ExpenseItem key={expense.id} expenseitem={expense} />
    </ul> // key prop, allows us add a unique key to a list being rendered this helps react to uniquely place list item during rendering getting rid of performance issues and bugs.
  ));
}

export default ExpensesList;
