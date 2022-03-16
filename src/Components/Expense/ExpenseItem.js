import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expense.css'
import ExpenseDate from '../Expense/ExpenseDate';
const ExpenseItem = (props) => {
    const { title, amount, date } = props

    const [upTitle, setTitle] = useState(title)

    const clickHandler = () => {
        setTitle('Updated')
    }
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={date} />
                <div className='expense-item__description'>
                    <h2>{upTitle}</h2>
                    <div className='expense-item__price'>
                        ${amount}
                    </div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>
    );
};

export default ExpenseItem;