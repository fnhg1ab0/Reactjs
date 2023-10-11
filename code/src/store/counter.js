// import {createStore} from "redux";
import {createSlice} from "@reduxjs/toolkit";

const initialCounterState = {
    count: 0,
    isShow: true
};

// using redux library
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'increment':
//             return {
//                 count: state.count + 1,
//                 isShow: state.isShow
//             };
//         case 'increase':
//             return {
//                 count: state.count + action.amount,
//                 isShow: state.isShow
//             };
//         case 'decrement':
//             return {
//                 count: state.count - 1,
//                 isShow: state.isShow
//             };
//         case 'toggle':
//             return {
//                 count: state.count,
//                 isShow: !state.isShow
//             }
//         default:
//             return state;
//     }
// }
//
// const storeRedux = createStore(reducer);

//-------------------------------------------------------------------------

// using redux toolkit library
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.count++;
        },
        increase(state, action) {
            state.count = state.count + action.payload;
        },
        decrement(state) {
            state.count--;
        },
        toggle(state) {
            state.isShow = !state.isShow;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;