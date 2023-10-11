import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isToggle: false
    },
    reducers: {
        toggle(state) {
            state.isToggle = !state.isToggle;
        }
    }
});

export const {toggle} = uiSlice.actions;
export default uiSlice;