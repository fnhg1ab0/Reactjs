import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import {LoginContextProvider} from "./store/LoginContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LoginContextProvider>
        <App/>
    </LoginContextProvider>
);
