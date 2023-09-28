import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.style.id}>{props.label}</label>
            <input ref={ref} {...props.style} />
        </div>
    );
});
export default Input;