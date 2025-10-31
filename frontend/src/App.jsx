import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Pages
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import CandidateDashboard from './pages/CandidateDashboard.jsx'

import { Toaster } from './components/ui/toaster'
import ForgotPassword from './pages/ForgotPassword'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/candidate-dashboard',
    element: <CandidateDashboard />
  }
  ,
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App
