import {useRouteError} from 'react-router-dom';
import MainNavigation from "../../components/MainNavigation";

import PageContent from "../../components/PageContent";

function Error() {
    const error = useRouteError();

    let title = 'An error occurred!';
    let message = 'Something went wrong!';
    console.log(error);

    if (error.status === 500) {
        // using with throw new Response()
        // message = JSON.parse(error.data).message;
        // using with throw json()
        message = error.data.message;
    }

    if (error.status === 404) {
        title = 'Not found!';
        message = 'Could not find resource or page.';
    }

    return (
        <>
            <MainNavigation/>
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
}

export default Error;