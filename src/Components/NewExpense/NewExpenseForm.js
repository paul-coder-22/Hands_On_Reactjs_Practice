import React, { useState } from 'react';
import "./NewExpenseForm.css";
const NewExpenseForm = (props) => {

    const [formValue, setForm] = useState({
        title: "",
        amount: 0,
        date: ""
    })
    const [toggleForm, setToggleForm] = useState(true)

    const getFormData = (e) => {
        setForm({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (event) => {
        formValue.date = new Date(formValue.date)
        formValue.amount = +formValue.amount
        event.preventDefault()
        props.onSaveExpenseData(formValue)
        setForm({
            title: "",
            amount: 0,
            date: ""
        })
    }

    const openExpenseForm = () => {
        setToggleForm(!toggleForm)
    }

    return (
        toggleForm ?
            (
                <form action="" onSubmit={submitHandler}>
                    <div className='new-expense__controls'>
                        <div className="new-expense__control">
                            <label htmlFor="">Title</label>
                            <input type="text" name='title' onChange={getFormData} value={formValue.title} />
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="">Amount</label>
                            <input type="number" min="0.01" step={'0.01'} name="amount" onChange={getFormData} value={formValue.amount} />
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="">Date</label>
                            <input
                                type="date" min='2019-01-01'
                                max='2022-12-31' name="date"
                                onChange={getFormData} value={formValue.date} />
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button onClick={openExpenseForm}>Cancel</button>
                        <button type='submit'>Add Expenses</button>
                    </div>
                </form>
            )
            :
            (
                <div className="new-expense__actions expenses-list__fallback">
                    <button onClick={openExpenseForm}> Add New Expenses</button>
                </div>
            )
    );
};

export default NewExpenseForm;