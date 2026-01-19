import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TrainerDashboard from './pages/TrainerDashboard';
import CoordinatorDashboard from './pages/CoordinatorDashboard';
import LoginForm from './pages/LoginForm';

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginForm />} />
            <Route path='/trainer' element={<TrainerDashboard />} />
            <Route path='/coordinator' element={<CoordinatorDashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
