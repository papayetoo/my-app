import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

	const onAddExpense = (expenseData) => {
		console.log("onAddExpense");
		console.log(expenseData);
		const newExpense = {
			title: expenseData.title,
			amount: expenseData.amount,
			date: new Date(expenseData.date),
		};
		props.onAddExpense(newExpense);
	};
	return (
		<div className="new-expense">
			<ExpenseForm onAddExpense={onAddExpense}/>
		</div>
	)
};

export default NewExpense;