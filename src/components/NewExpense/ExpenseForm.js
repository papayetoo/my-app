import React, { Component } from "react";
import "./ExpenseForm.css";

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", amount: 0.01, date: new Date() };
    this.titleChangeHandler= this.titleChangeHandler.bind(this);
    this.amountChangeHandler = this.amountChangeHandler.bind(this);
    this.dateChangeHandler = this.dateChangeHandler.bind(this);
  }
  titleChangeHandler(e)  {
    console.log(e.target.value);
    this.setState({title: e.target.value});
  };

  amountChangeHandler(e) {
    console.log(e.target.value);
    this.setState({amount: e.target.value});
  }

  dateChangeHandler(e) {
    console.log(e.target.value);
    this.setState({date: e.target.value});
  }

  submitHandler = (e) => {
    // Prevent Default Behavior
    e.preventDefault();
    console.log(this.state);
    const sumbittedState = {
      title: this.state.title,
      amount: this.state.amount,
      date: this.state.date
    }
    this.props.onAddExpense(sumbittedState);
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={this.titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" onChange={this.amountChangeHandler} min="0.01" step="0.01" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" onChange={this.dateChangeHandler} min="2019-01-01" max="2022-12-31" defaultValue={this.state.date} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expenses</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
