import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { categories } from "../utils/data/Categories";

console.log(categories.name);

const HomePage = () => {
  return (
    <div className="flex flex-col items-center  w-full ">
      <div className="flex flex-col gap-4 items-center pt-10">
        <h1 className="text-5xl text-primary font-bold">Explore Our Categories</h1>
        <p className="text-lg text-white opacity-70">Discover the latest trends in eco-friendly fashion</p>
      </div><div className="flex items-center justify-center w-[60%] ">
        <div className="flex flex-wrap justify-center w-full">
          {categories.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="flex justify-center items-center relative w-1/3 p-2 overflow-hidden"
            >
              <div className="w-full h-[300px] relative">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-md transform transition-transform duration-300 ease-in-out hover:scale-125"
                />
                <div className="absolute bottom-0 left-0 flex flex-col gap-3 pl-4 pb-5">
                  <h1 className="font-bold text-white text-xl">{item.name}</h1>
                  <span className="text-white">Explore {item.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HomePage;
