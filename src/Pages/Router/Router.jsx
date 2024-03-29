import React from 'react'
import Sidebar from '../../Component/Sidebar/Sidebar'
import HomePage from '../HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import Profile from '../Profile/Profile'

const Router = () => {
  return (
    <div>
        <div className='flex'>
            <div className="w-[20%] border border-l-slate-500">
              <Sidebar/>
            </div>
            <div className= "w-full">
              <Routes>
                  <Route path ="/" element={<HomePage />}></Route>
                  <Route path ="/username" element={<Profile />}></Route>            
              </Routes> 
            </div>
        </div>
    </div>
  )
}

export default Router