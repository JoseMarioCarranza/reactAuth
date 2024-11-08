import { Routes, Route } from 'react-router-dom'
import { Dashboard, Home, Login, Secret, Signup } from '@/Pages'
import { useAuthContext } from '@/Hooks/useAuthContext'

const RoutesIndex = () => {
    const { isAuth } = useAuthContext()

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/dashboard'
                element={
                    isAuth ?
                        <Dashboard />
                        : <login />
                }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/secret'
                element={
                    isAuth ?
                        <Secret />
                        : <login />
                }
            />
            <Route path='/signup' element={<Signup />} />
        </Routes>
    )
}

export default RoutesIndex