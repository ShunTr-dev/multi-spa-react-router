import { Outlet, useLoaderData, useSubmit } from 'react-router-dom'

import MainNavigation from '../components/MainNavigation'
import { useEffect } from 'react'
import { getTokenDuration } from '../util/auth'

function RootLayout() {
    const token = useLoaderData()
    const submit = useSubmit()

    useEffect(() => {
        if (!token) {
            return
        }

        if (token === 'EXPIRED') {
            submit(null, { method: 'post', action: '/logout' })
            return
        }

        const tokenDuration = getTokenDuration

        setTimeout(() => {
            submit(null, { method: 'post', action: '/logout' })
        }, tokenDuration)
    }, [token, submit])

    // const navigation = useNavigation();

    return (
        <>
            <MainNavigation />
            <main>
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout
