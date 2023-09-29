import React from "react";
import styles from "./HeaderCartBtn.module.css";
import CartSvg from "../Cart/CartSvg";

const HeaderCartBtn = (props) => {
    return (
        <button className={styles.button} onClick={props.onShow}>
            <span className={styles.icon}>
                <CartSvg/>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>3</span>
        </button>
    );
}
export default HeaderCartBtn;