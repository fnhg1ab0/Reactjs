import React, {useContext, useEffect, useState} from "react";
import styles from "./HeaderCartBtn.module.css";
import CartSvg from "../Cart/CartSvg";
import CartContext from "../../store/cart-context";

const HeaderCartBtn = (props) => {
    const [addCart, setAddCart] = useState(false);
    const cartCtx = useContext(CartContext);

    const btnClasses = `${styles.button} ${addCart ? styles.bump : ''}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setAddCart(true);
        const timer = setTimeout(() => {
            setAddCart(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [cartCtx.totalAmount]);

    return (
        <button className={btnClasses} onClick={props.onShow}>
            <span className={styles.icon}>
                <CartSvg/>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{cartCtx.totalAmount}</span>
        </button>
    );
}
export default HeaderCartBtn;