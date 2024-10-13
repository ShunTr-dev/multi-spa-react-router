import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Events, { loader as eventsLoader } from './pages/Events/Events'
import EventDetail, { loader as eventDetailLoader, action as deleteEventAction } from './pages/Events/EventDetail'
import NewEvent from './pages/Events/NewEvent'
import EditEvent from './pages/Events/EditEvent'
import RootLayout from './pages/RootLayout'
import EventsRootLayout from './pages/Events/EventsRootLayout'
import ErrorPage from './pages/ErrorPage'
import { action as manipulateEventAction } from './components/EventForm'
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter/Newsletter'

const router = createBrowserRouter([
    {
        path: '',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: 'events',
                element: <EventsRootLayout />,
                children: [
                    {
                        index: true,
                        element: <Events />,
                        loader: eventsLoader,
                    },
                    {
                        path: ':eventId',
                        id: 'eventDetail',
                        loader: eventDetailLoader,
                        children: [
                            { index: true, element: <EventDetail />, action: deleteEventAction },
                            { path: 'edit', element: <EditEvent />, action: manipulateEventAction },
                        ],
                    },

                    { path: 'new', element: <NewEvent />, action: manipulateEventAction },
                ],
            },
            {
                path: 'newsletter',
                element: <NewsletterPage />,
                action: newsletterAction,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
