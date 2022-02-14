import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";
import React, { useState } from "react";

let DUMMY_EXPENSES = [
    { title: "Karina", amount: 293.67, date: new Date(2021, 2, 28) },
    { title: "Winter", amount: 293.67, date: new Date(2018, 2, 28) },
    { title: "Wendy", amount: 293.67, date: new Date(2019, 2, 28) },
    { title: "Taeyeon", amount: 293.67, date: new Date(2020, 2, 28) },
];
function App() {
  let [expenses, setExpense] = useState(DUMMY_EXPENSES);
  
  const expenseAddHandler = (expense) => {
    console.log(`${expense.title} ${expense.date} ${expense.amount}`);
    setExpense([expense, ...expenses]);
  };
  
  return (
    <div>
    <NewExpense onAddExpense={expenseAddHandler}/>
    <Card>
    <Expenses expenses={expenses}></Expenses>
    </Card>
    </div>
  );
}

export default App;
