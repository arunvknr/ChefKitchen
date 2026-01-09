import React from "react";
import MenuBar from "./MenuBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className="w-full flex  ">
        <MenuBar />
      <div className="flex flex-col w-full">
         <Header/> 
         <Outlet />
      </div>
    </div>
  );
};

export default Layout;
