import EventsList from "../../components/EventsList";
import {Await, defer, json, useLoaderData} from "react-router-dom";
import {Suspense} from "react";

function EventsPage() {
    const {events} = useLoaderData();

    // if (data.isError) {
    //   return <p>{data.message}</p>;
    // }

    return (
        <>
            <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
                <Await resolve={events}>
                    {data => <EventsList events={data}/>}
                </Await>
            </Suspense>
        </>
    );
}

export default EventsPage;

export const loadEvent = async () => {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return error
        // return {isErr: true, mess: "Could not fetch events."};
        // eslint-disable-next-line no-throw-literal
        // throw {status: response.status, message: "Could not fetch events."}
        // throw new Response(JSON.stringify({message: "Could not fetch events."}), {status: 500});
        throw json({message: "Could not fetch events."}, {status: 500})
    } else {
        const res = await response.json();
        return res.events;
    }
}

export const loader = () => {
    return defer({
        events: loadEvent(),
    });
}