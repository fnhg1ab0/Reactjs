import style from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";
import React, { useState, useRef } from 'react';

// const InitialState = {
//     name: '',
//     age: ''
// }

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredInfo, setEnteredInfo] = useState(InitialState);
    const [error, setError] = useState(false);

    const addUserHandler = (event) => {
        event.preventDefault();
        // if(enteredInfo.name.trim().length === 0 || enteredInfo.age.trim().length === 0){
        //     setError({
        //         title: 'Invalid Input',
        //         message: 'Please enter a valid name and age (non-empty values).'
        //     });
        //     return;
        // } else if(+enteredInfo.age < 1){
        //     setError({
        //         title: 'Invalid Age',
        //         message: 'Please enter a valid age ( > 0 ).'
        //     });
        //     return;
        // }
        // props.onAddUser(enteredInfo);
        // setEnteredInfo({
        //     name: '',
        //     age: ''
        // });

        // use useRef() instead of useState()
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        } else if(+enteredAge < 1){
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age ( > 0 ).'
            });
            return;
        }
        props.onAddUser({
            name: enteredName,
            age: enteredAge,
        });
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    // const changeHandler = (event) => {
    //     setEnteredInfo((prevEnteredInfo) => {
    //         return {
    //             ...prevEnteredInfo,
    //             [event.target.id]: event.target.value.trim()
    //         }
    //     });
    // }

    const resetError = () => {
        setError(false);
    }

    return(
        <React.Fragment>
            {error &&
                <ErrorModal valueErr={error} onResetErr={resetError}/>
            }
            <Card className={style.input}>
                <form onSubmit={addUserHandler}>
                    <div>
                        <label htmlFor="name">Username</label>
                        <input
                            id="name"
                            type="text"
                            ref={nameInputRef}
                            // value={enteredInfo.name}
                            // onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="age">Age (Years)</label>
                        <input
                            id="age"
                            type="number"
                            ref={ageInputRef}
                            // value={enteredInfo.age}
                            // onChange={changeHandler}
                        />
                    </div>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    );
}
export default AddUser;