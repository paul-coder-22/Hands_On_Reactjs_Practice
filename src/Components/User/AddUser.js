import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

import classes from "./AddUser.module.css";

const AddUser = (props) => {

    const [user, setUser] = useState({
        username: "",
        age: "",
        id: ""
    })
    const [error, setError] = useState()

    const addUserHandler = (event) => {

        event.preventDefault()

        if (user.username.trim().length === 0 || user.age.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter valid username and Age"
            })
            return
        }
        if (+user.age < 1) {
            setError({
                title: "Invalid age",
                message: "Please neter a valid Age ( > 0)."
            })
            return
        }
        user.id = Math.random().toString() * 10000
        setError(false)
        props.onAdduser(user)
        setUser({
            username: "",
            age: ""
        })

    }

    const getuserRes = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }
    // const errorModal =
    const Errorhandler = () => {
        setError(null)
    }


    return (
        <>
            {
                error && <ErrorModal title={error.title} message={error.message} onClear={Errorhandler} />
            }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler} >
                    <label htmlFor="username">Username</label>
                    <input type="text"
                        id='username' name='username'
                        value={user.username} onChange={getuserRes} />
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number"
                        id='age' name='age'
                        value={user.age} onChange={getuserRes} />
                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;