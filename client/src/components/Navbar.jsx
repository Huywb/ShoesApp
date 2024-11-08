import React from 'react'
import { Link } from 'react-router-dom'
import shoping from '../assets/Shoping.svg'

import UserButton from '../assets/user-plus.svg'
import Login from '../assets/Login.svg'
import Dashboard from '../assets/dashboard.svg'


const Navbar = () => {
  const user = true
  return (
    <div className='sticky z-50 px-[10%] top-0 flex items-center justify-between h-auto py-6 bg-black text-white'>
        <div>
          <Link to={'/'}><h1 className='font-bold text-3xl'>Shoes-App</h1></Link>
        </div>
        <div className='flex gap-4 text-2xl font-semibold items-center'>
          <Link to={'/'}><h1>Home</h1></Link>
          {user  ?  
          <>
            <Link to={'/cart'} className='flex gap-2'>
              <img src={shoping} alt="" />
              <h1>Cart</h1>
            </Link>
            <Link to={'/dashboard/Create-product'}  className='bg-[#08976b] py-2 px-5 flex gap-1 rounded-lg'>
              <img src={Dashboard} alt="" />
              <button>Dashboard</button>
            </Link>
            <Link to={'/login'}  className='bg-[#374151] py-3 px-5 flex gap-1 rounded-lg'>
              <img src={Login} alt="" />
            </Link>
          </> : 
          <>
          <Link to={'/register'}  className='bg-[#08976b] py-2 px-5 flex gap-1 rounded-lg'>
              <img src={UserButton} alt="" />
              <button>Register</button>
          </Link>
          <Link to={'/login'}  className='bg-[#374151] py-2 px-5 flex gap-1 rounded-lg'>
          <img src={Login} alt="" />
          <button>Login</button>
          </Link>
          </>
          }
        </div>
    </div>
  )
}

export default Navbar