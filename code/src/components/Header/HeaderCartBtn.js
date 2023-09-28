import React from "react";
import styles from "./HeaderCartBtn.module.css";
import CartSvg from "../Cart/CartSvg";
import Cart from "../Cart/Cart";

const HeaderCartBtn = (props) => {
    return (
        <button className={styles.button}>
            <span className={styles.icon}>
                <CartSvg/>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>3</span>
            <Cart/>
        </button>
    );
}
export default HeaderCartBtn;