import React, { useEffect } from "react";
import Login from '../assets/Login.svg'
import Mail from '../assets/Mail.svg'
import HidePass from '../assets/Hide-pass.svg'
import ShowPass from '../assets/Show-pass.svg'
import Passwrod from '../assets/Password.svg'

import {animateMini, motion} from 'framer-motion'

import { Link, Router, useParams } from 'react-router-dom'
import { menuAdmin } from "../utils/data/Categories";


const AdminPage = () => {

  const {menu} = useParams()

  console.log(menuAdmin[0].url)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-center items-center pt-10">
        <div className="flex flex-col gap-10 items-center w-[30%] text-[#eeeeee] text-xl font-bold">
          <h1 className="text-primary font-bold text-5xl text-shadow-custom ">
            Admin Dashboard
          </h1>
          <div className="flex gap-2 items-center">
            {menuAdmin.map((item,index)=>(
              <Link to={`/dashboard/${item.url}`} key={index} className={`flex gap-2 rounded-md ${menu === item.url  ? "bg-[#047552]" : '' } p-3 `}>
                <img src={item.image} alt={item.image} />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          <div className="p-10 flex flex-col gap-3 bg-[#1f2936] w-[100%]">
            <h1 className="font-bold text-primary text-3xl ">Create New Product</h1>
            <div className="flex flex-col gap-1 w-full">
              <h1 className=" opacity-70 ">Product Name</h1>
              <div className="flex p-4 gap-1 bg-[#374151]">
                <input
                  type="text"
                  className="bg-transparent outline-none"
                  placeholder="HuyPham@gmail.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <h1 className=" opacity-70 ">Description</h1>
              <div className="flex p-4 gap-1 bg-[#374151]">
                <input
                  type="text"
                  className="bg-transparent outline-none"
                  placeholder="HuyPham@gmail.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <h1 className=" opacity-70 ">Product Name</h1>
              <div className="flex p-4 gap-1 bg-[#374151]">
                <input
                  type="text"
                  className="bg-transparent outline-none"
                  placeholder="HuyPham@gmail.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <h1 className=" opacity-70 ">Product Name</h1>
              <div className="flex p-4 gap-1 bg-[#374151]">
                <input
                  type="text"
                  className="bg-transparent outline-none"
                  placeholder="HuyPham@gmail.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <h1 className=" opacity-70 ">Product Name</h1>
              <div className="flex p-4 gap-1 bg-[#374151]">
                <input
                  type="text"
                  className="bg-transparent outline-none"
                  placeholder="HuyPham@gmail.com"
                />
              </div>
            </div>
            <div className="bg-[#047552] flex gap-2 p-4 justify-center cursor-pointer">
              <img src={Login} alt="" className="w-8" />
              <button>Login</button>
            </div>
            <p className="font-semibold">
              Not a member ?{" "}
              <Link to={"/register"}>
                <span className="font-bold underline cursor-pointer">
                  Register
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminPage;
