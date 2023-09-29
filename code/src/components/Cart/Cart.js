import styles from './Cart.module.css';
import ModalCart from "../UI/ModalCart";
import CartItem from "./CartItem";
import CartFooterModal from "./CartFooterModal";

const Cart = (props) => {
    return (
        <ModalCart onClose={props.onHide}>
            <ul className={styles['cart-items']}>
                {[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                    />
                ))}
            </ul>
            <CartFooterModal onClose={props.onHide}/>
        </ModalCart>
    );
}
export default Cart;