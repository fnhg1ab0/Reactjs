import React, {useContext} from 'react';

import classes from './Navigation.module.css';
import LoginContext from "../../store/LoginContext";

// use context consumer to get the context value
// const Navigation = (props) => {
//     return (
//         <LoginContext.Consumer>
//             {ctx => {
//                 return (
//                     <nav className={classes.nav}>
//                         <ul>
//                             {ctx.isLoggedIn && (
//                                 <li>
//                                     <a href="/">Users</a>
//                                 </li>
//                             )}
//                             {ctx.isLoggedIn && (
//                                 <li>
//                                     <a href="/">Admin</a>
//                                 </li>
//                             )}
//                             {ctx.isLoggedIn && (
//                                 <li>
//                                     <button onClick={props.onLogout}>Logout</button>
//                                 </li>
//                             )}
//                         </ul>
//                     </nav>
//                 )
//             }}
//         </LoginContext.Consumer>
//     );
// };

// useContext is a hook that allows you to use context in functional components
const Navigation = (props) => {
    const ctx = useContext(LoginContext);
    return (
        <nav className={classes.nav}>
            <ul>
                {ctx.isLoggedIn && (
                    <li>
                        <a href="/">Users</a>
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                        <a href="/">Admin</a>
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                        <button onClick={ctx.onLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );

}

export default Navigation;
