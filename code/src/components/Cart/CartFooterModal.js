import styles from './CartFooterModal.module.css';
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const CartFooterModal = (props) => {

    const cartCtx = useContext(CartContext);
    const existedItem = cartCtx.items.length > 0;

    let totalPrice = 0;
    for (const item of cartCtx.items) {
        totalPrice += item.price * item.amount;
    }

    const total = `$${totalPrice.toFixed(2)}`;

    const submitOrderHandler = (event) => {
        event.preventDefault();
        props.onOrder();
    }

    const btn = (
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onClose}>
                Close
            </button>
            {existedItem && <button className={styles.button} onClick={submitOrderHandler}>Order</button>}
        </div>
    )

    return (
        <>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{total}</span>
            </div>
            {!props.onCheckout && btn}
        </>
    );
}
export default CartFooterModal;