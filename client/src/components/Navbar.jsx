import React from 'react'
import { Link } from 'react-router-dom'
import shoping from '../assets/Shoping.svg'

const Navbar = () => {
  return (
    <div className='sticky top-0 ring-0 left-0 flex items-center justify-between h-auto p-6 bg-black text-white'>
        <div>
          <Link to={'/'}><h1 className='font-bold text-3xl'>Shoes-App</h1></Link>
        </div>
        <div className='flex gap-4 text-2xl font-semibold'>
          <Link to={'/'}><h1>Home</h1></Link>
          <Link to={'/cart'} className='flex gap-2'>
            <img src={shoping} alt="" />
            <h1>Cart</h1>
          </Link>
        </div>
    </div>
  )
}

export default Navbar