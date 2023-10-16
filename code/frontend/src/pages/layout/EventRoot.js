import EventsNavigation from "../../components/EventsNavigation";
import {Outlet, useNavigation} from "react-router-dom";

const EventRoot = () => {
    const navigation = useNavigation();

    return (
        <>
            <EventsNavigation/>
            {navigation.state === 'loading' && 'Loading...'}
            <main>
                <Outlet/>
            </main>
        </>
    )
}
export default EventRoot;