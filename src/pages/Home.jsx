import React, { useState, useEffect, useContext } from "react";
import { Search, ShoppingCart } from "lucide-react";
import Orders from "../component/Orders";
import Sidebar from "../component/Sidebar";
import ConfirmOrderReceipt from "../component/ConfirmOrderReceipt";


import Header from "../component/Header";
import FilterDishes from "../component/FilterDishes";
import Dishes from "../component/Dishes";
import { OrderContext } from "../context/OrderContext";

function Home() {
  const {
    receipt,showOrders
  }=useContext(OrderContext);

  return (
    <div className=" flex h-screen bg-gray-800 text-white overflow-hidden w-full p">
      {receipt && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <ConfirmOrderReceipt/>
        </div>
      )}
      <div className=" w-0 md:w-24 shrink-0 ">
         <Sidebar/>
      </div>
      <div
        className={`flex-1 flex flex-col ${showOrders ? "lg:mr-[460px]" : ""}`}>
        <Header />
        <div className="flex-1 overflow-y-auto px-6   no-scrollbar ">
          {/* FilterDishes */}
          <FilterDishes />
          <Dishes/>
        </div>
      </div>
      <Orders
      />
    </div>
  );
}

export default Home;
