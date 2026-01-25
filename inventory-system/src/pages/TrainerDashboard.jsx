import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Sidemenu from '../components/Sidemenu'

const TrainerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Header />

      <div className="flex">
        <Sidemenu />

        <main className="ml-48 flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default TrainerDashboard