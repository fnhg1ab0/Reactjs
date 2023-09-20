import styles from './FormInput.module.css';
import {useState} from "react";

const Initialize_Data = null;

const FormInput = (props) => {
    const [currentData, setCurrentData] = useState(Initialize_Data);
    const submitHandler = (event) => {
        event.preventDefault();
        props.onAddData(currentData);
    }

    const changeHandler = (key, event) => {
        setCurrentData((preData) => {
            return {
                ...preData,
                [key]: +event.target.value,
            }
        });
    }
    const resetHandler = () => {
        setCurrentData(Initialize_Data);
        props.onResetData();
    }

 return(
     <form className={styles.form} onSubmit={submitHandler}>
         <div className={styles['input-group']}>
             <p>
                 <label htmlFor="current-savings">Current Savings ($)</label>
                 <input
                     type="number"
                     id="current-savings"
                     value={currentData && currentData['current-savings'] ? currentData['current-savings'] : ''}
                     onChange={(event)=>(changeHandler('current-savings', event))}
                     required
                 />
             </p>
             <p>
                 <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                 <input
                     type="number"
                     id="yearly-contribution"
                     value={currentData && currentData['yearly-contribution'] ? currentData['yearly-contribution'] : ''}
                     onChange={(event)=>(changeHandler('yearly-contribution', event))}
                     required
                 />
             </p>
         </div>
         <div className={styles['input-group']}>
             <p>
                 <label htmlFor="expected-return">
                     Expected Interest (%, per year)
                 </label>
                 <input
                     type="number"
                     id="expected-return"
                     value={currentData && currentData['expected-return'] ? currentData['expected-return'] : ''}
                     onChange={(event)=>(changeHandler('expected-return', event))}
                     required
                 />
             </p>
             <p>
                 <label htmlFor="duration">Investment Duration (years)</label>
                 <input
                     type="number"
                     id="duration"
                     value={currentData && currentData['duration'] ? currentData['duration'] : ''}
                     onChange={(event)=>(changeHandler('duration', event))}
                     required
                 />
             </p>
         </div>
         <p className={styles.actions}>
             <button type="reset" className={styles.buttonAlt} onClick={resetHandler}>
                 Reset
             </button>
             <button type="submit" className={styles.button}>
                 Calculate
             </button>
         </p>
     </form>
 );
}
export default FormInput;