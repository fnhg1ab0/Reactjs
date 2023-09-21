import style from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrrorModal";
import { useState } from 'react';

const InitialState = {
    name: '',
    age: ''
}

const AddUser = (props) => {
    const [enteredInfo, setEnteredInfo] = useState(InitialState);
    const [error, setError] = useState(false);

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredInfo.name.trim().length === 0 || enteredInfo.age.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        } else if(+enteredInfo.age < 1){
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age ( > 0 ).'
            });
            return;
        }
        props.onAddUser(enteredInfo);
        setEnteredInfo({
            name: '',
            age: ''
        });
    }

    const changeHandler = (event) => {
        setEnteredInfo((prevEnteredInfo) => {
            return {
                ...prevEnteredInfo,
                [event.target.id]: event.target.value.trim()
            }
        });
    }

    const resetError = () => {
        setError(false);
    }

    return(
        <div>
            {error &&
                <ErrorModal valueErr={error} onResetErr={resetError}/>
            }
            <Card className={style.input}>
                <form onSubmit={addUserHandler}>
                    <div>
                        <label htmlFor="name">Username</label>
                        <input id="name" value={enteredInfo.name} type="text" onChange={changeHandler}/>
                    </div>
                    <div>
                        <label htmlFor="age">Age (Years)</label>
                        <input id="age" value={enteredInfo.age} type="number" onChange={changeHandler}/>
                    </div>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}
export default AddUser;