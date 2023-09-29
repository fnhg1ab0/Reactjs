import styles from './Cart.module.css';
import ModalCart from "../UI/ModalCart";
import CartItem from "./CartItem";
import CartFooterModal from "./CartFooterModal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const addCartItemHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    }

    const removeCartItemHandler = (id) => {
        cartCtx.removeItem(id);
    }

    return (
        <ModalCart onClose={props.onHide}>
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
            <CartFooterModal onClose={props.onHide}/>
        </ModalCart>
    );
}
export default Cart;