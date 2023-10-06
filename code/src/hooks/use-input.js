import {useReducer} from "react";

const initializeReducer = {
    value: '',
    isTouched: false
}

const inputReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return {value: action.value, isTouched: state.isTouched};
    }
    if (action.type === 'BLUR') {
        return {value: state.value, isTouched: true}
    }
    if (action.type === 'RESET') {
        return initializeReducer;
    }

    return state;
}

const useInput = (checkValid) => {
    const [input, dispatchInput] = useReducer(inputReducer, initializeReducer);

    const valueIsValid = checkValid(input.value);
    const hasError = !valueIsValid && input.isTouched;

    const blurHandler = () => {
        dispatchInput({type: 'BLUR'});
    }

    const changeHandler = (event) => {
        dispatchInput({type: 'INPUT', value: event.target.value});
    }

    const reset = () => {
        dispatchInput({type: 'RESET'});
    }

    return {
        value: input.value,
        isValid: valueIsValid,
        hasError,
        changeHandler,
        blurHandler,
        reset
    }
}
export default useInput;