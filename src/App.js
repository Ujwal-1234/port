import { useState, useEffect } from 'react'
import Nav from './components/Nav';
import pl from './assets/logo.png'
import {  
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// import './App.css'
import Body from './components/Body';
import Nav_mob from './components/Nav_mob';
import { FiMenu, FiX } from 'react-icons/fi'

function App() {
  const [add, setAdd] = useState(true)
  const [isVisible, setIsVisible] = useState(false);
  const [menuicon, setMenu] = useState(true);
  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      setAdd(false)
    }, 3000);
  }, []);
  return (
    add?<div className='w-screen min-h-screen bg-black flex items-center justify-center'>
        <a>
          <img src={pl} class=" fade-in"/>
        </a>
      </div>
      :
      <div className='w-screen min-h-screen bg-black flex items-center justify-center'>
        <div className=' bg-slate-100 hidden lg:block z-50 fixed top-0 lg:h-1/6'>
          <Nav/>
        </div>
        {menuicon?<></>
        :<div className=' bg-slate-100 lg:hidden z-50 fixed top-0 lg:h-1/6'>
        <Nav_mob/></div>}
        <div className=' bg-slate-100 lg:hidden z-50 fixed top-0 lg:h-1/6'>
          {menuicon?<FiMenu onClick={()=>setMenu(false)} className=' bg-slate-800 rounded-lg text-6xl fixed bottom-10 text-white right-5 z-50 lg:p-1 shadow-primary-sm lg:hidden'/>:<FiX className=' bg-slate-800 rounded-lg text-6xl fixed bottom-10 text-white right-5 z-50 lg:p-1 shadow-primary-sm lg:hidden' onClick={()=>setMenu(true)}/>}
        </div>
        <div></div>
        <div className=' bg-slate-900 h-full fixed overflow-auto w-full'>
          <Body/>
        </div>
      </div>
  )
}

export default App
