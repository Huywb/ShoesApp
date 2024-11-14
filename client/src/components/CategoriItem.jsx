import React from "react";

import bags from '../assets/images/bags.jpg'
import cart from '../assets/Shoping.svg'
const CategoriItem = () => {
  return (
    <div className="flex w-[24%] rounded-md  flex-col max-h-[400px] gap-2 p-2 bg-transparent border border-white border-opacity-40 hover:border-opacity-90">
      <img
        src={bags}
        alt=""
        className="object-cover rounded-lg max-h-[200px]"
      />
      <div className="flex flex-col gap-2 px-4">
        <h1 className="text-white font-semibold text-lg max-h-[30px] overflow-hidden">
          Cool Bagdsadasdsadsa dsadsadasdas
        </h1>
        <p className="text-primary font-bold text-xl">$29</p>
        <div className="bg-[#08976b] cursor-pointer mb-2 rounded-lg flex gap-2 w-fit p-2 text-white font-semibold">
          <img src={cart} alt="" />
          <span>Add to cart</span>
        </div>
      </div>
    </div>
  );
};

export default CategoriItem;
