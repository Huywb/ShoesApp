import React from 'react'

import logo from "../../src/assets/upload.svg";
import featured from "../assets/featured.svg";
import unfeatured from "../assets/unfeatured.svg";
import delete1 from "../assets/delete1.svg";

const ProductCard = () => {
  return (
    <div className="bg-[#1f2936] flex gap-2  p-4 px-8 text-lg">
          <div className="flex-[3] flex gap-2 items-center">
            <img src={logo} alt="" className="w-16"/>
            <p>Test</p>
          </div>
          <span className="flex-[2] flex justify-center items-center">$123.00</span>
          <span className="flex-[2] flex justify-center items-center">Test</span>
          <span className="flex-[2] flex justify-center items-center">1234</span>
          <span className="flex-[2] justify-center flex">
            <img src={featured} alt="" className=" w-10 text-red-600 " />
          </span>
          <span className="flex-[2] justify-center flex">
            <img src={delete1} alt=""  className=" w-10"/>
          </span>
        </div>
  )
}

export default ProductCard