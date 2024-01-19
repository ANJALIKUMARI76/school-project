
import Home from './Pages/Home.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import News from './Pages/news.jsx'
import Register from './Pages/Register.jsx'
import LogIn from './Pages/LogIn.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import { useEffect, useState } from 'react'
import { analytics, } from './Helpers/index.js'
import {logEvent} from 'firebase/analytics'

function App() {
if(analytics){
  logEvent(analytics,'user visited')
}
let username ="Kirti";
let userid="101";
const [loggedIn,setisLoggedin] = useState(false)

useEffect(()=>{
const token = localStorage.getItem("userToken")
if(token){
  setisLoggedin(true)
}
},[])

  return (
    <>
    <Navbar name={username}/>
    <Routes>
      <Route path='/' element={<Home id={101}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contactus' element={< ContactUs/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/register' element={<Register/>}/>
     <Route path='/login' element={<LogIn/>} />
{ loggedIn && <Route path='/dashboard' element={<Dashboard/>} />}
    </Routes>
    
    
    </>
  )
}

export default App
