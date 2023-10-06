import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        changeHandler: nameChangeHandler,
        blurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');

    let formIsvValid = false;
    if (enteredNameIsValid) formIsvValid = true;

    const submitHandler = (event) => {
        event.preventDefault();
        if (!enteredNameIsValid) {
            return;
        }
        console.log('name value: ', enteredName);
        resetNameInput();
    }


    const inputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={submitHandler}>
            <div className={inputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsvValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
