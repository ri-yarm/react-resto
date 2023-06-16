import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Header from '../Header'

import Home from '../../pages/Home'

import './App.css'
import Auth from '../../pages/Auth'

function App() {
  return (
    <div className='page_contaiener'>
       <Header />

       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
       </Routes>
    </div>
  )
}

export default App
