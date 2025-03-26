import {BrowserRouter, Route, Routes } from 'react-router-dom'
import RiMXLandingPage from './pages/RiMXLandingPage'
import Signup from './pages/Signup'
import AdminPanel from './components/AdminPanel'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<RiMXLandingPage/>}/>
      <Route path="/AdminPanel" element={<AdminPanel/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<LoginForm/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
