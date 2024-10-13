import { json, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import EventItem from '../../components/EventItem'

export default function EventDetail() {
    const data = useRouteLoaderData('eventDetail')

    return (
        <>
            <EventItem event={data.event} />
        </>
    )
}

export async function loader({ request, params }) {
    const response = await fetch('http://localhost:8080/events/' + params.eventId)

    if (!response.ok) {
        throw json({ message: 'could not fetch details for selected event.' }, { status: 500 })
    } else {
        return response
    }
}
