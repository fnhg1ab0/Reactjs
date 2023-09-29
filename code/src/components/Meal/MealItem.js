import {useContext} from "react";
import styles from './MealItem.module.css';
import MealFormInput from "./MealFormInput";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
        console.log(cartCtx.items);
    }

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealFormInput id={props.id} onAddAmount={addToCartHandler}/>
            </div>
        </li>
    );
};
export default MealItem;