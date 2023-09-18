import './Expenses.css';
import {useState} from "react";
import Card from "../Card/Card.js";
import ExpenseFilter from "./ExpenseFilter.js";
import ExpenseList from "./ExpenseList.js";
import ExpenseChart from "./ExpenseChart.js";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
            <ExpenseChart items={filteredExpenses}/>
            {/* render list of items dynamic */}
            <ExpenseList filterYear={filteredExpenses}/>
        </Card>
    );
}

export default Expenses