import React, {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = ({onExpenseData, onCancel}) => {
    const [title, updateTitle] = useState('');
    const [amount, updateAmount] = useState('');
    const [date, updateDate] = useState('');
    //alternative to useState
    // const [userInput, updateUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // });

    const titleChangeHandler = (event) => {
        updateTitle(event.target.value);
        //alternative to useState
        // updateTitle((prevState) => {
        //     return {...prevState, title: event.target.value};
        // });
    }
    const amountChangeHandler = (event) => {
        updateAmount(event.target.value);
        //alternative to useState
        // updateTitle((prevState) => {
        //     return {...prevState, amount: event.target.value};
        // });
    }
    const dateChangeHandler = (event) => {
        updateDate(event.target.value);
        //alternative to useState
        // updateTitle((prevState) => {
        //     return {...prevState, date: event.target.value};
        // });
    }

    // alternative to ChangeHandler
    const inputChangeHandler = (identifier, event) => {
        if(identifier === 'title'){
            updateTitle(event.target.value);
        }
        else if(identifier === 'amount'){
            updateAmount(event.target.value);
        }
        else if(identifier === 'date'){
            updateDate(event.target.value);
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        };

        // two-way binding
        // to receive data input and change the state
        updateTitle('');
        updateAmount('');
        updateDate('');

        // child to parent communication
        onExpenseData(expenseData);
    };

    return(
        <form action="" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" value={title} onChange={(event) => {inputChangeHandler('title', event)}}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input id="amount" type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input id="date" type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};
export default ExpenseForm;