import styles from './Cart.module.css';
import ModalCart from "../UI/ModalCart";
import CartItem from "./CartItem";
import CartFooterModal from "./CartFooterModal";
import Checkout from "./Checkout";
import {useContext, useState} from "react";
import CartContext from "../../store/cart-context";
import useHttp from "../hooks/use-http";

const Cart = (props) => {
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);
    const [isCheckout, setIsCheckout] = useState(false);
    const {isLoading, error, sendRequest: order} = useHttp();

    console.log(didSubmit);

    const addCartItemHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    }

    const removeCartItemHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const orderHandler = () => {
        setIsCheckout(true);
    }

    const confirmOrderHandler = async (userData) => {

        const configAPI = {
            url: 'https://react-http-api-efe38-default-rtdb.firebaseio.com/orders.json',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: userData,
                orderItems: cartCtx.items
            })
        }

        await order(configAPI, (data) => {
            console.log('Order is sent!');
            console.log(data);
        });

        setDidSubmit(true);
        cartCtx.clearCart();
    }

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={() => removeCartItemHandler(item.id)}
                    onAdd={addCartItemHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    let cartModalContent = (
        <>
            {cartItems}
            <CartFooterModal
                onClose={props.onHide}
                onOrder={orderHandler}
                onCheckout={isCheckout}
            />
            {isCheckout && <Checkout onConfirm={confirmOrderHandler} onHide={props.onHide}/>}
        </>
    );

    if (didSubmit) {
        cartModalContent = (
            <>
                <p className={styles.ordered}>Order is sent!</p>
                <div className={styles.actions}>
                    <button className={styles.button} onClick={props.onHide}>
                        Close
                    </button>
                </div>
            </>
        );
    }

    if (isLoading) {
        cartModalContent = <p>Sending order data...</p>;
    }

    if (error) {
        cartModalContent = (
            <>
                <p className={styles.Err}>{error}</p>
                <div className={styles.actions}>
                    <button className={styles.button} onClick={props.onHide}>
                        Close
                    </button>
                </div>
            </>
        );
    }


    return (
        <ModalCart onClose={props.onHide}>
            {cartModalContent}
        </ModalCart>
    );
}
export default Cart;