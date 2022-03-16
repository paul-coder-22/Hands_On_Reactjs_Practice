import React from 'react';
import "./NewExpense.css";
import NewExpenseForm from './NewExpenseForm';
const NewExpense = (props) => {

    const saveExpenseDateHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className='new-expense'>
            <NewExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
        </div>
    );
};

export default NewExpense;