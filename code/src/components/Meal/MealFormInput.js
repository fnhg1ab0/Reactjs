import styles from './MealFormInput.module.css';
import Input from "../UI/Input";
import {useRef, useState} from "react";

const MealFormInput = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const inputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        if (inputRef.current.value.trim().length === 0 || +inputRef.current.value < 1 || +inputRef.current.value > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddAmount(+inputRef.current.value);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={inputRef}
                label="Amount"
                style={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
}
export default MealFormInput;