import React, {useReducer} from 'react';
import CartContext from "./cart-context";

const INITIAL_REDUCER = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.amount;
        const existId = state.items.findIndex((item) => {
            return item.id === action.item.id
        });
        const existItem = state.items[existId];
        let updatedItems;
        if (existItem) {
            const updatedItem = {
                ...existItem,
                amount: existItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existId] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'REMOVE') {
        const existId = state.items.findIndex((item) => {
            return item.id === action.id
        });
        const existItem = state.items[existId];
        const updatedTotalAmount = state.totalAmount - 1;
        let updatedItems;
        if (existItem.amount === 1) {
            updatedItems = state.items.filter((item) => {
                return item.id !== action.id;
            });
        } else {
            const updatedItem = {
                ...existItem,
                amount: existItem.amount - 1,
            };
            updatedItems = [...state.items];
            updatedItems[existId] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }
    return INITIAL_REDUCER;
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, INITIAL_REDUCER);

    const addItemHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    }

    const removeItemHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    }

    return (
        <CartContext.Provider value={{
            items: cartState.items,
            totalAmount: cartState.totalAmount,
            addItem: addItemHandler,
            removeItem: removeItemHandler,
        }}>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartProvider;