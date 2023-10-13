import {createSlice} from "@reduxjs/toolkit";

/**
 * @description
 * @type {Slice<{totalQuantity: number, items: *[], changed: boolean}, {replaceCart(*, *): void, addItemToCart(*, *): void, removeItemFromCart(*, *): void}, string>}
 */
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false
    },
    reducers: {
        replaceCart(state, action) {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
        },
        addItemToCart(state, action) {
            const id = state.items.findIndex(item => item.id === action.payload.id);
            state.totalQuantity++;
            state.changed = true;
            if (id === -1) {
                state.items.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    price: action.payload.price,
                    quantity: 1,
                    total: action.payload.price
                });
            } else {
                state.items[id].quantity++;
                state.items[id].total += action.payload.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = state.items.findIndex(item => item.id === action.payload.id);
            state.totalQuantity--;
            state.changed = true;
            if (state.items[id].quantity === 1) {
                state.items.splice(id, 1);
            } else {
                state.items[id].quantity--;
                state.items[id].total -= action.payload.price;
            }
        }
    }
});

export const {addItemToCart, removeItemFromCart, replaceCart} = cartSlice.actions;
export default cartSlice;