import React from 'react';
import CartContext from "./cart-context";

const CartProvider = (props) => {
    return (
        <CartContext.Provider value={{
            items: [],
            totalAmount: 0,
            addItem: (item) => {
            },
            removeItem: (id) => {
            }
        }}>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartProvider;