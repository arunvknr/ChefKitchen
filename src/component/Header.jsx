
import { Search, ShoppingCart } from "lucide-react";
import React, { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import { tabs } from "../icons/index";

const Header = () => {
  const {
    today,
    cartCount,
    setSearchTerm,
    active,
    setActive,
    setShowOrders,
  } = useContext(OrderContext);

  return (
    <div className="sticky top-0 z-30 bg-gray-800 px-6 pt-6">
      {/* Top header: title, date, search, cart */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Chef Kitchen</h1>
          <p className="text-sm text-gray-300">
            {today.toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Search and Cart */}
        <div className="flex gap-5 items-center">
          {/* Search input (hidden on mobile) */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-14 pl-10 pr-4 w-60 rounded-xl bg-gray-800 border border-gray-600 outline-none text-white placeholder-gray-400"
              placeholder="Search food..."
            />
          </div>

          {/* Cart button */}
          <button
            onClick={() => setShowOrders(true)}
            className="relative bg-orange-500 rounded-xl px-3 py-2 sm:px-4 sm:py-2 flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center rounded-full bg-red-600 text-white text-[10px] sm:text-xs font-bold min-w-4 h-4 sm:min-w-[18px] sm:h-[18px] px-1">
                  {cartCount}
                </span>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex mt-6 space-x-6 border-b border-gray-600 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`pb-3 text-sm md:text-lg font-semibold whitespace-nowrap ${
              active === tab.id ? "text-orange-400" : "text-white"
            } relative`}
          >
            {tab.label}
            {active === tab.id && (
              <span className="absolute left-0 -bottom-px h-1 w-full bg-orange-400 rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
