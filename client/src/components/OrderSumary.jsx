import React from 'react'
import { Link } from 'react-router-dom'

const OrderSumary = () => {
  return (
    <div className='flex flex-col gap-4 w-full '>
        <div className='flex flex-col gap-6 w-full bg-[#1f2936] border border-opacity-20 border-white rounded-lg p-6 py-8'>
            <h1 className='text-primary font-bold text-2xl'>Order summary</h1>
            <div className='flex justify-between text-white text-xl'>
              <p className='opacity-80'>Original price</p>
              <span className='font-semibold text-primary'>$199.00</span>
            </div>
            <hr className='w-full opacity-30' />
            <div className='flex justify-between text-white text-xl font-bold'>
              <p >Total</p>
              <span className='text-primary '>$199.00</span>
            </div>
            <button className='bg-[#047552] w-full items-center font-bold text-white p-3 rounded-lg '>Proceed to Checkout</button>
            <p className='flex justify-center gap-2 text-white font-bold'>or <Link to={'/'} className='text-primary underline'>Continue Shopping</Link></p>
        </div>
        <div className='flex flex-col gap-2 w-full bg-[#1f2936] border border-opacity-20 border-white rounded-lg p-6 py-8'>
          <h1 className='text-xl text-white font-bold'>Do you have a voucher or gift card?</h1>
          <input type="text" placeholder='Enter code here...'  className='p-4 bg-[#374151] rounded-lg text-white'/>
          <button className='bg-[#047552] w-full items-center font-bold text-white mt-2 p-3 rounded-lg '>Apply Code</button>
        </div>
    </div>
  )
}

export default OrderSumary