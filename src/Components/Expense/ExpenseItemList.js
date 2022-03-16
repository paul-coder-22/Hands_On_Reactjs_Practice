import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import "./ExpenseItemList.css";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
let ExpenseItemList = ({ expenseList }) => {

    let [filterYear, setFilterYear] = useState('2020')
    let getFilterYear = (year) => {
        setFilterYear(year);
    }

    let filterExpenses = expenseList.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear
    })

    return (
        <div >
            <Card className='expenses'>
                <ExpensesFilter selected={filterYear} onFilterYear={getFilterYear} />
                <ExpensesList filterExpenses={filterExpenses} />
            </Card>
        </div>
    );
};

export default ExpenseItemList;