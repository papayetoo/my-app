import './ExpenseDate.css';
import Card from '../UI/Card';

function ExpenseDate(pros) {
	const month = pros.date.toLocaleString('ko-KR', {month: 'numeric'})
	const day = pros.date.toLocaleString('ko-KR', {day: 'numeric'})
	const year = pros.date.getFullYear();
	return (
		<Card className='expense-date'>
			<div className='expense-date__month'>{month}</div>
			<div className='expense-date__day'>{day}</div>
			<div className='expense-date__year'>{year}</div>
		</Card>
	);
}

export default ExpenseDate;