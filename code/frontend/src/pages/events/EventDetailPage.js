import {Await, defer, json, redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../../components/EventItem";
import {Suspense} from "react";
import EventsList from "../../components/EventsList";

const EventDetailPage = () => {
    const {event, events} = useRouteLoaderData('eventDetail');
    return (
        <>
            <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
                <Await resolve={event}>
                    {data => <EventItem event={data}/>}
                </Await>
            </Suspense>
            <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
                <Await resolve={events}>
                    {data => <EventsList events={data}/>}
                </Await>
            </Suspense>
        </>
    );
}
export default EventDetailPage;

export const loadEvent = async (id) => {
    const response = await fetch(`http://localhost:8080/events/${id}`);
    if (!response.ok) {
        throw json({message: "Could not fetch event."}, {status: 500});
    } else {
        const res = await response.json();
        return res.event;
    }
}

export const loadEvents = async () => {
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

export const loader = async ({request, params}) => {
    const id = params.eventId;
    return defer({
        event: await loadEvent(id),
        events: loadEvents(),
    });
}

export const action = async ({request, params}) => {
    const id = params.eventId;
    const response = await fetch(`http://localhost:8080/events/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw json({message: "Could not update event."}, {status: 500});
    }

    return redirect('/events');
}