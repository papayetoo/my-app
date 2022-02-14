import CalendarElement from "./ExpenseDate";
import React, { Component, setState} from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
class ExpenseItem extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.title, amount: props.amount, date: props.date};

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(props) {
    console.log("Clickedd");
    this.setState({title: "chagned"});
    // this.setState({title:"changed title"});
  }

  render() {
  return (
    <Card className="expense-item">
      <CalendarElement date={this.state.date}></CalendarElement>
      <div className="expense-item__description">
        <h1>{this.state.title}</h1>
        <div className="expense-item__price">${this.state.amount}</div>
      </div>
      <button onClick={this.clickHandler}>Change Title</button>
    </Card>
  );
  }
}


export default ExpenseItem;
