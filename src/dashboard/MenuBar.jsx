import { LogOut, Menu, Shapes, ShoppingCart, StretchHorizontal, X } from "lucide-react";
import React, { useState } from "react";

const MenuBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const togglemenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${isExpanded ? "w-60 " : "w-20"} bg-amber-300 flex flex-col h-screen transition-all duration-300`}>
      
      {/* Header */}
      <div className="p-4 flex items-center justify-between mt-2 gap-3">
        {isExpanded && <span className="text:sm lg:text-2xl font-bold whitespace-nowrap">Chef Kitchen</span>}
        <button onClick={togglemenu} className=" p-2 bg-amber-100 rounded">
          {isExpanded ? <X size={15} /> : <Menu size={15} />}
        </button>
      </div>

      {/* Menu */}
      <div className="flex flex-col flex-1 mt-4 items-center p">
        <button className="flex items-center gap-3 w-full p-6 hover:bg-amber-400">
          <Shapes size={20} />
          {isExpanded && <span>Category</span>}
        </button>
        <button className="flex items-center gap-3 w-full p-6 hover:bg-amber-400">
          <StretchHorizontal size={20} />
          {isExpanded && <span>Products</span>}
        </button>
        <button className="flex items-center gap-3 w-full p-6 hover:bg-amber-400">
          <ShoppingCart size={20} />
          {isExpanded && <span>Orders</span>}
        </button>
      </div>
      {/* Logout */}
      <button className="flex items-center gap-3 p-6 hover:bg-amber-400  ">
        <LogOut size={20} />
        {isExpanded && <span>Log Out</span>}
      </button>
    </div>
  );
};

export default MenuBar;