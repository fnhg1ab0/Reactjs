import Expenses from "./components/Expenses/Expenses.js";
import AddExpense from "./components/AddExpense/AddExpense";
import {useState} from "react";

const INITIALIZE_EXPENSE = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

// Component
function App() {
    const [expenses, setExpenses] = useState(INITIALIZE_EXPENSE);
    const addExpense = (inputExpenseData) => {
        const newExpense = {
            id: 'e' + (expenses.length + 1),
            ...inputExpenseData
        }
        setExpenses((prevExpenses) => {
            return [newExpense, ...prevExpenses];
        });
    }
    return (
        <div>
            <AddExpense onAddExpense={addExpense}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
