import { Link } from 'react-router-dom'

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Programming for everyone',
    },
    {
        id: 'e2',
        title: 'Programming for kids',
    },
    {
        id: 'e3',
        title: 'Programming for lizards',
    },
]

export default function Events() {
    return (
        <>
            <h1>Events</h1>
            <ul>
                {DUMMY_EVENTS.map((event) => (
                    <li key={event.id}>
                        <Link to={event.id}>{event.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
