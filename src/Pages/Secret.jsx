import { useAuthContext } from '@/Hooks/useAuthContext'

const Secret = () => {
    const { userPayload } = useAuthContext()

    return (
        <>
            <h1>Secret</h1>

            {
                userPayload?.role == 'ADMIN'
                    ? <h2>Hola admin</h2>
                    : <h2>Hola usuario</h2>
            }
        </>
    )
}

export default Secret