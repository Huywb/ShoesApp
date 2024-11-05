import React from 'react'
import shoping from '../assets/Shoping.svg'
import { Link } from 'react-router-dom'

const CartPage = () => {
  const list = []
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col gap-5 items-center'>
          <img src={shoping} alt="" className='w-28' />
          <h1 className='font-bold text-3xl text-white'>Your cart is empty</h1>
          <p className='opacity-70 font-bold text-lg text-[#aadce4]'>Look like you haven't add anything to your cart yet.</p>
          <Link to={'/'}><button className='py-3 font-semibold rounded-lg text-xl px-10 bg-[#0aac79] text-white'>Start Shoping</button></Link>
      </div>

    </div>
  )
}

export default CartPage