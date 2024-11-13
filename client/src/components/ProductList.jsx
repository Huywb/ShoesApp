import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="w-screen flex justify-center ">
      <div className="flex flex-col w-[70%] ">
        <div className="flex gap-2 bg-[#3a4152] p-4 px-8 text-lg">
          <span className="flex-[3]">PRODUCT</span>
          <span className="flex-[2] text-center">PRICE</span>
          <span className="flex-[2] text-center">CATEGORY</span>
          <span className="flex-[2] text-center">IN STOCK</span>
          <span className="flex-[2] text-center">FEATURED</span>
          <span className="flex-[2] text-center">ACTIONS</span>
        </div>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default ProductList;
