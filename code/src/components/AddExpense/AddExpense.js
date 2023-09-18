import './AddExpense.css';
import ExpenseForm from './ExpenseForm';
import {useState} from "react";
const AddExpense = ({onAddExpense}) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const saveExpenseDataHandler = (inputExpenseData) => {
        const expenseData = {
            ...inputExpenseData
        };
        onAddExpense(expenseData);
        setIsFormOpen(false);
    }

    const openFormHandler = () => {
        setIsFormOpen(true);
    }

    const closeFormHandler = () => {
        setIsFormOpen(false);
    }

    return(
        <div className="new-expense">
            {!isFormOpen && (<button onClick={openFormHandler}>Add New Expense</button>)}
            {isFormOpen && (
                <ExpenseForm onExpenseData={saveExpenseDataHandler} onCancel={closeFormHandler}/>
            )}
        </div>
    );
};
export default AddExpense;