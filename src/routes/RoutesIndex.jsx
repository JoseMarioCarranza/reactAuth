import { Routes, Route } from 'react-router-dom'
import { Dashboard, Home, Login, Secret, Signup } from '@/Pages'

const RoutesIndex = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/secret' element={<Secret />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
    )
}

export default RoutesIndex