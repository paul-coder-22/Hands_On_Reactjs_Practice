import React from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

import classes from "./AddUser.module.css";

const AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault()
    }
    console.log(classes.input);
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler} >
                <label htmlFor="username">Username</label>
                <input type="text" id='username' />
                <label htmlFor="age">Age (Years)</label>
                <input type="text" id='age' />
                <Button type="submit" >Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;