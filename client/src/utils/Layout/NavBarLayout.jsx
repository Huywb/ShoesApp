import React from 'react'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

const NavBarLayout = () => {
  return (
    <>
        <Navbar></Navbar>
        <Outlet />
    </>
  )
}

export default NavBarLayout