import React from "react";
import shoping from "../assets/Shoping.svg";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import SuggetProduct from "../components/SuggetProduct";
import OrderSumary from "../components/OrderSumary";

const CartPage = () => {
  const list = [1];
  return (
    <>
      {list.length>0 ?  (
        <div className="flex justify-center mt-20">
        <div className="flex gap-20 w-[80%]">
          <div className="flex-[5] flex-col ">
            <div className="flex flex-col gap-2 max-h-[500px] overflow-y-scroll custom-scrollbar">
              <CartItem></CartItem>
              <CartItem></CartItem>
              <CartItem></CartItem>
              <CartItem></CartItem>
              <CartItem></CartItem>
              <CartItem></CartItem>
            </div>
            <SuggetProduct></SuggetProduct>
          </div>
          <div className="flex-[2] ">
            <OrderSumary></OrderSumary>
          </div>
        </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col gap-5 items-center">
          <img src={shoping} alt="" className="w-28" />
          <h1 className="font-bold text-3xl text-white">Your cart is empty</h1>
          <p className="opacity-70 font-bold text-lg text-[#aadce4]">
            Look like you haven't add anything to your cart yet.
          </p>
          <Link to={"/"}>
            <button className="py-3 font-semibold rounded-lg text-xl px-10 bg-[#0aac79] text-white">
              Start Shoping
            </button>
          </Link>
        </div>
    </div>

      )}
      </>
  );
  
};

export default CartPage;
