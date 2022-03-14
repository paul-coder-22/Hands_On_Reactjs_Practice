import React from 'react';
import "./NewExpense.css";
import NewExpenseForm from './NewExpenseForm';
const NewExpense = () => {
    return (
        <div className='new-expense'>
            <NewExpenseForm />
        </div>
    );
};

export default NewExpense;