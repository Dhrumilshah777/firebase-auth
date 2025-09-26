import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Home from './pages/home'
import ProtectedRoute from './components/protectedRoute'

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home' element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            } />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App