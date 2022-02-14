import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expenses: props.expenses};
    this.filterHandler = this.filterHandler.bind(this);
  }

  filterHandler = (filterYear) => {
    this.setState((state, props) => ({expenses: props.expenses.filter(e => e.date.getFullYear() === filterYear)}));
  }

  render() {
    return (
      <Card className="expenses">
        <ExpensesFilter onFilterChanged={this.filterHandler}/>
        {this.state.expenses.length === 0 ? <p>No Expenses</p> : this.state.expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.title}/>)}
      </Card>
    )
  }
}

export default Expenses;
