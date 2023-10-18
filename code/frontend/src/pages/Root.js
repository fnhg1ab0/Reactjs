import {Outlet, useLoaderData, useSubmit} from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import {useEffect} from "react";
import {getTokenDuration} from "../utils/auth";

function RootLayout() {
    const submit = useSubmit();
    const auth = useLoaderData();

    useEffect(() => {
        if (auth) return;

        if (auth === 'EXPIRED') {
            submit(null, {action: '/logout', method: 'post'})
            return;
        }

        const tokenDuration = getTokenDuration();

        setTimeout(() => {
            submit(null, {action: '/logout', method: 'post'});
        }, tokenDuration);
    }, [auth, submit]);

    return (
        <>
            <MainNavigation/>
            <main>
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet/>
            </main>
        </>
    );
}

export default RootLayout;
