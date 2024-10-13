import { useLoaderData, useRouteLoaderData } from 'react-router-dom'
import EventForm from '../../components/EventForm'

export default function EditEvent() {
    const data = useRouteLoaderData('eventDetail')

    return <EventForm event={data.event} />
}
