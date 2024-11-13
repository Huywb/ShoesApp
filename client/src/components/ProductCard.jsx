import React, { useState } from 'react'

import logo from "../../src/assets/upload.svg";
import featured from "../assets/featured.svg";
import unfeatured from "../assets/unfeatured.svg";
import delete1 from "../assets/delete1.svg";

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const ProductCard = () => {
  const [checkFeatured,setCheckFeatured] = useState(false)

  const handleCheckFeatured = ()=>{
    setCheckFeatured(!checkFeatured)
  }

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
    <div className="bg-[#1f2936] flex gap-2  p-4 px-8 text-lg">
          <div className="flex-[3] flex gap-2 items-center">
            <img src={logo} alt="" className="w-16"/>
            <p>Test</p>
          </div>
          <span className="flex-[2] flex justify-center items-center">$123.00</span>
          <span className="flex-[2] flex justify-center items-center">Test</span>
          <span className="flex-[2] flex justify-center items-center">1234</span>
          <span className="flex-[2] justify-center flex cursor-pointer" onClick={()=>handleCheckFeatured()}>
            <img src={checkFeatured  ? featured : unfeatured} alt="" className=" w-10" />
          </span>
          <span className="flex-[2] justify-center flex"  onClick={(e)=>handleDelete(e)}>
            <img src={delete1} alt=""  className=" w-10"/>
          </span>
        </div>
  )
}

export default ProductCard