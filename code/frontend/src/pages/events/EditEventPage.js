import EventForm from "../../components/EventForm";
import {useRouteLoaderData} from "react-router-dom";

const EditEventPage = () => {
    const data = useRouteLoaderData('eventDetail');
    return (
        <EventForm method='patch' event={data.event}/>
    );
}
export default EditEventPage;