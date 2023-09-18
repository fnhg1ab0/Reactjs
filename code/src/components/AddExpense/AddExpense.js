import './AddExpense.css';
import ExpenseForm from './ExpenseForm';
const AddExpense = ({onAddExpense}) => {
    const saveExpenseDataHandler = (inputExpenseData) => {
        const expenseData = {
            ...inputExpenseData
        };
        onAddExpense(expenseData);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};
export default AddExpense;