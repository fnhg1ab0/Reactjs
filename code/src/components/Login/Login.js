import React, {useState, useEffect, useReducer, useContext, useRef} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import LoginContext from "../../store/LoginContext";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
    if (action.type === "email")
        return {
            value: action.value,
            isValid: action.value.includes('@')
        }
    if (action.type === "blur")
        return {
            value: state.value,
            isValid: state.value.includes('@')
        }
    return {
        value: '',
        isValid: false
    }
}

const passwordReducer = (state, action) => {
    if (action.type === "password")
        return {
            value: action.value,
            isValid: action.value.trim().length > 6
        }
    if (action.type === "blur")
        return {
            value: state.value,
            isValid: state.value.trim().length > 6
        }
    return {
        value: '',
        isValid: false
    }
}

const Login = () => {
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    });

    const [passState, dispatchPass] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    });

    const ctx = useContext(LoginContext);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const {isValid: emailIsValid} = emailState;
    const {isValid: passIsValid} = passState;

    useEffect(() => {
            const timer = setTimeout(() => {
                console.log(emailState.value + " " + passState.value);
                setFormIsValid(
                    emailIsValid && passIsValid
                );
            }, 1000);
            return () => {
                console.log('Clean up timer');
                clearTimeout(timer);
            }
        },
        [emailIsValid, passIsValid]
    );

    useEffect(() => {
        console.log('Effect running');
        return () => {
            console.log('Effect clean up');
        }
    }, []);

    const emailChangeHandler = (event) => {
        dispatchEmail({type: 'email', value: event.target.value});
    };

    const passwordChangeHandler = (event) => {
        dispatchPass({type: 'password', value: event.target.value});
    };

    const validateEmailHandler = () => {
        dispatchEmail({type: 'blur'});
    };

    const validatePasswordHandler = () => {
        dispatchPass({type: 'blur'});
    };

    console.log(emailInputRef);

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid)
            ctx.onLogin(emailState.value, passState.value);
        else if (!emailIsValid)
            emailInputRef.current.activateOutside();
        else
            passwordInputRef.current.activateOutside();
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    id='email'
                    type='email'
                    label='E-Mail'
                    isValid={emailState.isValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                <Input
                    ref={passwordInputRef}
                    id="password"
                    label="Password"
                    type="password"
                    isValid={passIsValid}
                    value={passState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
