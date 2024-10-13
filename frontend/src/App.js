import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Events, { loader as eventsLoader } from './pages/Events/Events'
import EventDetail, { loader as eventDetailLoader } from './pages/Events/EventDetail'
import NewEvent from './pages/Events/NewEvent'
import EditEvent from './pages/Events/EditEvent'
import RootLayout from './pages/RootLayout'
import EventsRootLayout from './pages/Events/EventsRootLayout'
import ErrorPage from './pages/ErrorPage'

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
                    { path: ':eventId', element: <EventDetail />, loader: eventDetailLoader },
                    { path: 'new', element: <NewEvent /> },
                    { path: ':eventId/edit', element: <EditEvent /> },
                ],
            },
        ],
    },
])

function App() {
    return (
        <RouterProvider router={router}>
            <div className="App">
                <header className="App-header">
                    <h1>Event Management</h1>
                </header>
                <main>
                    <router.Router />
                </main>
            </div>
        </RouterProvider>
    )
}

export default App
