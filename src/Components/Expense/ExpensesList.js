import React from 'react';
import ExpenseItem from './ExpenseItem';
import "./ExpensesList.css";
const ExpensesList = ({ filterExpenses }) => {

    if (filterExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>No data Found</h2 >
    }
    return (
        <ul className='expenses-list'>
            {filterExpenses.map(e =>
                <ExpenseItem
                    title={e.title}
                    amount={e.amount}
                    date={e.date}
                    id={e.id}
                    key={e.id}
                />
            )}
        </ul >
    );
};

export default ExpensesList;