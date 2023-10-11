import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './counter';
import authReducer from './auth';


const storeRedux = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});
export default storeRedux;