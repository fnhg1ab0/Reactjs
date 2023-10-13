import classes from './CartItem.module.css';
import {useDispatch} from "react-redux";
import {addItemToCart, removeItemFromCart} from "../../store/cart";

const CartItem = (props) => {
    const {id, title, quantity, total, price} = props.item;
    const dispatch = useDispatch();

    const addItemToCartHandler = () => {
        dispatch(addItemToCart({
            id,
            title,
            price,
        }));
    }

    const removeItemFromCartHandler = () => {
        dispatch(removeItemFromCart({
            id,
            price
        }));
    }

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeItemFromCartHandler}>-</button>
                    <button onClick={addItemToCartHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
