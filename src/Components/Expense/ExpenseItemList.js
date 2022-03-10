import React from 'react';
import ExpenseItem from './ExpenseItem';
import "./ExpenseItemList.css";
const ExpenseItemList = (props) => {
    return (
        <div className='expenses'>
            {props.expenseList.map(e =>
                <ExpenseItem
                    title={e.title}
                    amount={e.amount}
                    date={e.date}
                    id={e.id}
                    key={e.id} >
                </ExpenseItem>
            )}
        </div>
    );
};

export default ExpenseItemList;