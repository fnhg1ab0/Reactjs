import styles from './MealFormInput.module.css';
import Input from "../UI/Input";

const MealFormInput = (props) => {
    return (
        <form className={styles.form}>
            <Input
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
        </form>
    );
}
export default MealFormInput;