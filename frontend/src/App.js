import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events/Events'
import EventDetail from './pages/Events/EventDetail'
import NewEvent from './pages/Events/NewEvent'
import EditEvent from './pages/Events/EditEvent'
import RootLayout from './pages/RootLayout'
import EventsRootLayout from './pages/Events/EventsRootLayout'

const router = createBrowserRouter([
    {
        path: '',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            {
                path: 'events',
                element: <EventsRootLayout />,
                children: [
                    {
                        index: true,
                        element: <Events />,
                        loader: async () => {
                            const response = await fetch('http://localhost:8080/events')

                            if (!response.ok) {
                                // handle error
                            } else {
                                const resData = await response.json()
                                return resData.events
                            }
                        },
                    },
                    { path: ':eventId', element: <EventDetail /> },
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
