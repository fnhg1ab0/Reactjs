import {useRef, useState} from "react";

const SimpleInput = (props) => {
    const refInput = useRef();
    const [stateInput, setStateInput] = useState('');
    const [stateIsValid, setStateIsValid] = useState(true);

    const changeHandler = (event) => {
        setStateInput(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (stateInput.trim() === '') {
            setStateIsValid(false);
            return;
        }
        setStateIsValid(true);
        console.log('use state to store input value: ', stateInput);
        console.log('use ref to store input value: ', refInput.current.value);
        setStateInput('');
        refInput.current.value = '';
    }

    const inputClasses = stateIsValid ? 'form-control' : 'form-control invalid';

    return (
        <form onSubmit={submitHandler}>
            <div className={inputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    ref={refInput}
                    type='text'
                    id='name'
                    onChange={changeHandler}
                    value={stateInput}
                />
                {!stateIsValid && <p className="error-text">Name must not be empty.</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
