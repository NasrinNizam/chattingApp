import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar/Navbar'

export const LayoutOne = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
