import { LogOut, Menu, Shapes, ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const LinkClass = ({ isActive }) =>
    isActive
      ? "w-full bg-amber-400 text-black"
      : "w-full text-black";

  return (
    <div className={`${isExpanded ? "w-60" : "w-20"} bg-amber-300 flex flex-col h-screen transition-all duration-300`}>
      
      <div className="p-4 flex items-center justify-between mt-2 gap-3">
        {isExpanded && <span className="text-2xl font-bold">Chef Kitchen</span>}
        <button onClick={() => setIsExpanded(!isExpanded)} className="p-2 bg-amber-100 rounded">
          {isExpanded ? <X size={15} /> : <Menu size={15} />}
        </button>
      </div>

      <div className="flex flex-col flex-1 mt-4">
        <NavLink to="/layout/category" className={LinkClass}>
          <div className="flex items-center gap-3 p-6 hover:bg-amber-400">
            <Shapes size={20} />
            {isExpanded && <span>Category</span>}
          </div>
        </NavLink>

        <NavLink to="/layout/products" className={LinkClass}>
          <div className="flex items-center gap-3 p-6 hover:bg-amber-400">
            <ShoppingCart size={20} />
            {isExpanded && <span>Products</span>}
          </div>
        </NavLink>

        <NavLink to="/layout/orderadmin" className={LinkClass}>
          <div className="flex items-center gap-3 p-6 hover:bg-amber-400">
            <ShoppingCart size={20} />
            {isExpanded && <span>orders</span>}
          </div>
        </NavLink>

      </div>

      <button className="flex items-center gap-3 p-6 hover:bg-amber-400">
        <LogOut size={20} />
        {isExpanded && <span>Log Out</span>}
      </button>
    </div>
  );
};

export default MenuBar;
