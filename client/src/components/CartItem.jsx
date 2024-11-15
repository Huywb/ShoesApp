import React, { useState } from 'react'

import bags from '../assets/images/bags.jpg'
import delete1 from '../assets/delete1.svg'
import increse from '../assets/increase.svg'
import minus from '../assets/minus.svg'


import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const CartItem = () => {
  const [qty,setqty] = useState(1)

  const handleIncrease = () => {
    setqty(prevQty => prevQty + 1);
  }
  
  const handleMinus = () => {
    setqty(prevQty => (prevQty > 1 ? prevQty - 1 : prevQty));
  }

  console.log(qty)
  
  const handleDelete = (e)=>{
    e.preventDefault()
    confirmAlert({
      customUI: ({ onClose }) => (
        <div className="font-semibold text-xl overflow-hidden backdrop-blur-lg bg-white w-[400px] p-4  ">
            <h1>Are you sure?</h1>
            <p className='pb-5'>You won't be able to undo this action!</p>
            <div className='flex justify-end'>
            <button
                onClick={() => {
                    console.log("Item deleted",e);
                    onClose();
                }}
                style={{
                    backgroundColor: "#ff5c5c",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    marginRight: "10px",
                }}
            >
                Yes, Delete
            </button>
            <button
                onClick={onClose}
                style={{
                    backgroundColor: "#ccc",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                }}
            >
                Cancel
            </button>
            </div>
        </div>
    ),

  });
  }
  return (
    <div className='flex flex-col gap-2'>
      <div className='bg-[#1f2936]  w-full flex text-white p-4 gap-2 border border-opacity-20 border-white rounded-lg'>
          <img src={bags} alt="" className='object-cover min-w-[200px] max-h-[150px]' />
          <div className='flex gap-2  w-full'>
            <div className='flex-[4] flex-col justify-between flex gap-2  p-4'>
              <h1 className='font-bold text-2xl'>Nike Air</h1>
              <span className='text-xl opacity-80'>Nike Shoes</span>
              <img src={delete1} alt="" onClick={(e)=>handleDelete(e)} className='w-9 cursor-pointer'/>
            </div>
            <div className='flex-[2] items-center flex gap-4'>
                <img src={minus} onClick={()=>handleMinus()} alt="" className={`w-9 cursor-pointer ${qty === 1? 'opacity-5 cursor-not-allowed' : ''}`}/>
                <span className='text-2xl'>{qty}</span>
                <img src={increse} onClick={()=>handleIncrease()} alt="" className='w-9 cursor-pointer'/>
            </div>
            <div className='flex-1 flex items-center'>
              <span className='text-primary font-bold text-2xl'>$199</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CartItem