import styles from './Checkout.module.css';
import {useRef, useState} from "react";

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
    const [validForm, setValidForm] = useState({
        name: true,
        street: true,
        postal: true,
        city: true,
    });

    const nameRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const street = streetRef.current.value;
        const postal = postalRef.current.value;
        const city = cityRef.current.value;
        
        const nameIsValid = !isEmpty(name);
        const streetIsValid = !isEmpty(street);
        const postalIsValid = isFiveChars(postal);
        const cityIsValid = !isEmpty(city);

        setValidForm({
            name: nameIsValid,
            street: streetIsValid,
            postal: postalIsValid,
            city: cityIsValid,
        });

        const formIsValid = nameIsValid && streetIsValid && postalIsValid && cityIsValid;
        if (!formIsValid) {
            console.log('Invalid form');
            return;
        }
        props.onConfirm({
            name,
            street,
            postal,
            city,
        });
    }

    const nameStyles = `${styles.control} ${validForm.name ? '' : styles.invalid}`;
    const streetStyles = `${styles.control} ${validForm.street ? '' : styles.invalid}`;
    const postalStyles = `${styles.control} ${validForm.postal ? '' : styles.invalid}`;
    const cityStyles = `${styles.control} ${validForm.city ? '' : styles.invalid}`;

    return (
        <form className={styles.form} onSubmit={confirmHandler}>
            <div className={nameStyles}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameRef}/>
                {!validForm.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={streetStyles}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetRef}/>
                {!validForm.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={postalStyles}>
                <label htmlFor='postal'>Postal Code</label>
                <input type="text" id='postal' ref={postalRef}/>
                {!validForm.postal && <p>Please enter a valid postal code (5 characters long)!</p>}
            </div>
            <div className={cityStyles}>
                <label htmlFor='city'>City</label>
                <input type="text" id='city' ref={cityRef}/>
                {!validForm.city && <p>Please enter a valid city!</p>}
            </div>
            <div className={styles.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit' className={styles.submit}>Confirm</button>
            </div>
        </form>
    );
}
export default Checkout;