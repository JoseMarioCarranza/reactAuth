import Header from '@/Components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/routes/RoutesIndex'
import { AuthProvider } from '@/Context/AuthContext'

import './App.css'


function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
