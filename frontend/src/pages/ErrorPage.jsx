import { useRouteError } from 'react-router-dom'
import PageContent from '../components/PageContent'
import MainNavigation from '../components/MainNavigation'

export default function ErrorPage() {
    const error = useRouteError()

    let title = 'An error ocurred!'
    let message = 'Something went wrong!'

    if (error === 500) {
        message = JSON.parse(error.data).message
    }

    if (error === 404) {
        title = 'Page not found'
        message = 'The page you are looking for does not exist'
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>{message}</PageContent>
        </>
    )
}
