 import React, { useState } from "react";
import Home from "../assets/icn2.svg?react";
import Coupons from "../assets/icn3.svg?react";
import Whishlist from "../assets/icn4.svg?react";
import Email from "../assets/icn5.svg?react";
import Notification from "../assets/icn6.svg?react";
import Exit from "../assets/icn7.svg";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";


const Sidebar = () => {
  const sideBarItems = [
    { id: 1, icon: <Home /> },
    { id: 2, icon: <Coupons /> },
    { id: 3, icon: <Whishlist /> },
    { id: 4, icon: <Email /> },
    { id: 5, icon: <Notification /> },
  ];

  const [activeButton, setActiveButton] = useState(sideBarItems[0].id);

  return (
    <div>
      <div className=" hidden  bg-[#1F1D2B] min-h-screen w-24 md:flex flex-col fixed top-0">
      {/* Logo */}
      <div className="flex items-center justify-center mt-4">
        <img src="/Logo.png" alt="Logo" className="w-15 h-15" />
      </div>

      {/* Sidebar Buttons */}
      <div className="flex flex-col items-center gap-y-4 mt-7 w-full flex-1 relative pl-3">
        {sideBarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveButton(item.id)}
            className={`relative w-full h-16 flex items-center justify-center
              cursor-pointer rounded-l-2xl
              transition-all duration-500 ease-in-out
              ${
                activeButton === item.id
                  ? "bg-gray-800"
                  : "bg-[#1F1D2B]"
              }`}
          >
            {/* Orange circle behind icon */}
            <span
              className={`absolute w-10 h-10 rounded-xl bg-button
                transition-all duration-500 ease-in-out
                ${
                  activeButton === item.id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-75"
                }`}
            ></span>

            {/* Icon */}
            <span
              className={`relative z-10 transition-colors duration-500
                ${
                  activeButton === item.id
                    ? "text-white"
                    : "text-button"
                }`} 
            >
              {item.icon}
            </span>

            {/* Top cuttings */}
            <span
              className={`w-5 h-5 bg-[#1F1D2B] absolute -top-5 right-0 rounded-br-2xl z-20
                transition-all duration-500
                ${
                  activeButton === item.id
                    ? "opacity-100"
                    : "opacity-0"
                }`}
            ></span>
            <span
              className={`w-5 h-5 bg-gray-800 absolute -top-5 right-0 z-10
                transition-all duration-500
                ${
                  activeButton === item.id
                    ? "opacity-100"
                    : "opacity-0"
                }`}
            ></span>

            {/* Bottom cuttings */}
            <span
              className={`w-5 h-5 bg-[#1F1D2B] absolute -bottom-5 right-0 rounded-tr-2xl z-20
                transition-all duration-500
                ${
                  activeButton === item.id
                    ? "opacity-100"
                    : "opacity-0"
                }`}
            ></span>
            <span
              className={`w-5 h-5 bg-gray-800 absolute -bottom-5 right-0 z-10
                transition-all duration-500
                ${
                  activeButton === item.id
                    ? "opacity-100"
                    : "opacity-0"
                }`}
            ></span>
          </button>
        ))}

        {/* Exit button */}
        <Link to="/">
          <button className="flex  mt-42 cursor-pointer ">
            <img src={Exit} alt="Exit" className=" w-6 h-6 text-button" />
          </button>
        </Link>
      </div>
    </div>
       {/* Mobile Bottom Navbar */}
<div className=" md:hidden
    fixed bottom-3 left-3 right-3
    h-16
    flex items-center justify-around
    bg-white/20 backdrop-blur-lg
    border border-white/20
    rounded-2xl
    shadow-lg
    z-50 ">
  {sideBarItems.map((item,index) => (
    <button
      key={item.id}
      onClick={() => setActiveButton(item.id)}
      className={`relative ${index === (3&&2) ? "hidden":"flex"}   items-center justify-center w-12 h-12`}
    >
      {/* Active background */}
      <span
        className={`absolute w-10 h-10  rounded-xl bg-button transition-all duration-300
          ${activeButton === item.id ? "opacity-100 scale-100" : "opacity-0 scale-75"}
        `}
      ></span>

      {/* Icon */}
      <span
        className={`relative z-10
          ${activeButton === item.id ? "text-white" : "text-button"}
        `}
      >
        {item.icon}
      </span>
    </button>
  ))}

  {/* Exit */}
  <Link to="/">
    <button className="flex items-center justify-center w-12 h-12">
      <img src={Exit} alt="Exit" className="w-6 h-6 text-button" />
    </button>
  </Link>
</div>
    </div>
  );
};

export default Sidebar;


