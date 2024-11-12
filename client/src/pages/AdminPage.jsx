import React, { useEffect, useState } from "react";
import Login from "../assets/Login.svg";

import plus from "../assets/plus.svg";
import upload from "../assets/upload.svg";
import delete1 from "../assets/delete.svg";

import { animateMini, motion } from "framer-motion";

import { Link, Router, useParams } from "react-router-dom";
import { menuAdmin } from "../utils/data/Categories";
import ProductList from '../components/ProductList'
import toast from 'react-hot-toast'
import Analytics from "../components/Analytics";

const AdminPage = () => {
  const { menu } = useParams();
  const [imageUrls, setImageUrls] = useState([]);
  const [value,setValue] = useState({
    Name: '',
    Description: '',
    Price: '',
    Category: '',
    Count: '',
  })

  const handleValue = (data) =>{
    setValue((prevValue)=>({...prevValue,[data.target.name]: data.target.value}))
  }

  const handleImage = (files) => {
    const urls = [];
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (event) => {
        urls.push(event.target.result);
        // Update state only after all files are processed
        if (urls.length === files.length) {
          setImageUrls(urls);
        }
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleDelete = (e)=>{
    const data = imageUrls.filter(item=>item!= e)
    setImageUrls(data)
  }

  const handleSubmit = ()=>{
    const finalData = {...value,img : imageUrls}
    if(finalData){
      toast.success("Create Completed")
      setValue({Name: '',
        Description: '',
        Price: '',
        Category: '',
        Count: '',})
      setImageUrls([])
    }
    

  }


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-center items-center pt-10">
        <div className="flex flex-col gap-10 items-center w-[40%] text-[#eeeeee] text-xl font-bold">
          <h1 className="text-primary font-bold text-5xl text-shadow-custom ">
            Admin Dashboard
          </h1>

          {/*Menu Dashboard*/}

          <div className="flex gap-2 items-center">
            {menuAdmin.map((item, index) => (
              <Link
                to={`/dashboard/${item.url}`}
                key={index}
                className={`flex gap-2 rounded-md ${
                  menu === item.url ? "bg-[#047552]" : ""
                } p-3 `}
              >
                <img src={item.image} alt={item.image} />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          {/*Form Dashboard*/}

          {menu === "Create-product" && 
          <div className="p-10 flex flex-col gap-3 bg-[#1f2936] w-[100%]">
          <h1 className="font-bold text-primary text-3xl ">
            Create New Product
          </h1>
          <div className="flex flex-col gap-1 w-full">
            {/*Product*/}

            <h1 className=" opacity-70 ">Product Name</h1>
            <div className="flex p-4 gap-1 bg-[#374151]">
              <input
                type="text"
                name="Name"
                onChange={handleValue}
                className="bg-transparent outline-none w-full"
                placeholder="Product..."
              />
            </div>
          </div>

          {/*Description*/}

          <div className="flex flex-col gap-1 w-full">
            <h1 className=" opacity-70 ">Description</h1>
            <div className="flex p-4 gap-1 bg-[#374151]">
              <textarea
                rows={3}
                name="Description"
                value={value.Description}
                onChange={handleValue}
                className="bg-transparent outline-none w-full"
                placeholder="Description..."
              />
            </div>
          </div>

          {/*Price*/}

          <div className="flex flex-col gap-1 w-full">
            <h1 className=" opacity-70 ">Price</h1>
            <div className="flex p-4 gap-1 bg-[#374151]">
              <input
                type="text"
                name="Price"
                value={value.Price}
                onChange={handleValue}
                className="bg-transparent outline-none w-full"
                placeholder="Price..."
              />
            </div>
          </div>

          {/*Category*/}

          <div className="flex flex-col gap-1 w-full">
            <h1 className=" opacity-70 ">Category</h1>
            <div className="flex p-4 gap-1 bg-[#374151]">
              <select
                name="Category" 
                value={value.Category} 
                onChange={handleValue} 
              className="w-full bg-transparent outline-none cursor-pointer ">
                <option
                  value=""
                  disabled
                  className="w-full bg-[#374151] outline-none hidden  opacity-60"
                >
                  Select a Category
                </option>
                <option value="Test1" className="w-full bg-[#374151] outline-none">
                  Test1
                </option>
                <option value="Test2" className="w-full bg-[#374151] outline-none">
                  Test2
                </option>
                <option value="Test3" className="w-full bg-[#374151] outline-none">
                  Test3
                </option>
              </select>
            </div>
          </div>

          {/*Stock*/}

          <div className="flex flex-col gap-1 w-full">
            <h1 className=" opacity-70 ">Count in Stock</h1>
            <div className="flex p-4 gap-1 bg-[#374151]">
              <input
                type="number"
                name="Count"
                value={value.Count}
                onChange={handleValue}
                className="bg-transparent outline-none w-full"
                placeholder="0"
              />
            </div>
          </div>

          {/*Upload Image*/}

          <div className="flex flex-wrap gap-2">
            {imageUrls.map((item, index) => (
              <div
                key={index}
                className="flex w-[32%] h-[150px] object-cover relative "
              >
                <img src={item} alt={item} className="w-full object-cover" />
                  <div onClick={()=>handleDelete(item)}  className="absolute top-0 right-0 bg-red-600 p-2 cursor-pointer">
                <img src={delete1} alt={delete1}  />
                </div>
              </div>
            ))}
            <label
              htmlFor="fileInput"
              className="flex w-[32%] h-[150px] justify-center bg-[#616161] items-center gap-2 font-normal  p-2 cursor-pointer"
            >
              <img src={upload} alt="Upload Icon" />
              <span>Image</span>
              <input
                type="file"
                id="fileInput"
                multiple
                onChange={(e) => handleImage(e.target.files)}
                className="hidden"
              />
            </label>
          </div>
          <div onClick={()=>handleSubmit()} className="bg-[#047552] flex gap-2 p-4 justify-center cursor-pointer rounded-md">
            <img src={plus} alt="" className="w-8" />
            <button>Create Product</button>
          </div>
          </div>}

          {menu === 'Products' && <ProductList></ProductList>} 
          </div>
          
          {menu === 'Analytics' && <Analytics></Analytics>}
        

      </div>
    </motion.div>
  );
};

export default AdminPage;
