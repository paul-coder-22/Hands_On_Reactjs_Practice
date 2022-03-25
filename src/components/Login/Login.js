import React, { useState, useEffect } from 'react';
import { useContext, useReducer } from 'react/cjs/react.development';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../Context/AuthContext';
import Input from '../UI/Input/Input';


const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") }
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") }
  }
  return { value: "", isValid: "" }
}


const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: "", isValid: "" }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatcEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null
  })
  const [passwordState, dispatcPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null
  })
  const authCtx = useContext(AuthContext);


  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity!');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  /* Optimization Problem */
  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid } = passwordState

  /* 
    We are extract the boolean value just to run the useEffect and stop it to re-run again and again
    When the isValid turn to False The useEffect will not excute 
  */


  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);



  const emailChangeHandler = (event) => {
    console.log(event.target.value);
    // setEnteredEmail(event.target.value);
    dispatcEmail({ type: "USER_INPUT", val: event.target.value })

    /*   setFormIsValid(
        event.target.value.includes('@') && passwordState.isValid
      ); */
  };

  const passwordChangeHandler = (event) => {
    console.log(event.target.value);
    // setEnteredPassword(event.target.value);
    dispatcPassword({ type: "USER_INPUT", val: event.target.value })

    /* setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
      // enteredEmail.includes('@') && event.target.value.trim().length > 6
    ); */
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatcEmail({ type: "INPUT_BLUR" })
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatcPassword({ type: "INPUT_BLUR" })

  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
    // props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email" id="email" label="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          type="password" id="password" label="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;


/* const EmailInput = (props) => {

  return (
    <div
      className={
        `${props.classes.control} ${props.emailState.isValid === false ? props.classes.invalid : ''}`}
    >
      <label htmlFor="email">E-Mail</label>
      <input
        type="email"
        id="email"
        value={props.emailState.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
} */