import './App.css'
import { Dashboard, Home, Loggin, Secret, Signup } from '@/Pages'
import Header from '@/Components/Header/Header'

function App() {

  return (
    <>
      <Header />
      <p>React Auth</p>
      <Home />
      <Dashboard />
      <Loggin />
      <Secret />
      <Signup />
    </>
  )
}

export default App
