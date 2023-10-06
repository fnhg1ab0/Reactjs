import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
    const {
        value: firstName,
        isValid: firstNameIsValid,
        hasError: firstNameInputHasError,
        changeHandler: firstNameChangeHandler,
        blurHandler: firstNameBlurHandler,
        reset: resetFirstNameInput
    } = useInput(isNotEmpty);

    const {
        value: lastName,
        isValid: lastNameIsValid,
        hasError: lastNameInputHasError,
        changeHandler: lastNameChangeHandler,
        blurHandler: lastNameBlurHandler,
        reset: resetLastNameInput
    } = useInput(isNotEmpty);

    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailInputHasError,
        changeHandler: emailChangeHandler,
        blurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(isEmail);

    let formIsValid = false;
    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        console.log('name value: ', firstName);
        console.log('name value: ', lastName);
        console.log('email value: ', email);
        resetFirstNameInput();
        resetLastNameInput();
        resetEmailInput();
    }

    const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
    const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={submitHandler}>
            <div className='control-group'>
                <div className={firstNameInputClasses}>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        type='text'
                        id='firstName'
                        value={firstName}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                    />
                    {firstNameInputHasError && <p className="error-text">First Name must not be empty.</p>}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        type='text'
                        id='lastName'
                        value={lastName}
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                    />
                    {lastNameInputHasError && <p className="error-text">Last Name must not be empty.</p>}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>E-Mail Address</label>
                <input
                    type='text'
                    id='email'
                    value={email}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {emailInputHasError && <p className="error-text">Email must not be empty and has digit @ .</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
