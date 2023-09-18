import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem.js";

const ExpenseList = ({filterYear}) => {
    // conditionally render list of items
    if(filterYear.length === 0) return <h2 className="expenses-list__fallback">No expenses found.</h2>;
    return (
        <ul className="expenses-list">
            {filterYear.map((expense) => (<ExpenseItem
                /* Add unique key to react render to avoid bug or loss data */
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />))}
        </ul>
    );
}
export default ExpenseList;