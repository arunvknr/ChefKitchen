import React from "react";

const FilterDishes = ({orderType, setOrderType}) => {
  return (
    <div className=" flex justify-between sticky top-0 z-30 py-4  bg-gray-800 ">
      <span className="text-2xl">Choose Dishes</span>
      <select
        value={orderType}
        onChange={(e) => setOrderType(e.target.value)}
        className="bg-[#1F1D2B] border border-gray-600 text-white
                px-6 py-2 rounded-xl outline-none cursor-pointer">
        <option value="dine-in">Dine In</option>
        <option value="take-away">Take Away</option>
        <option value="delivery">Delivery</option>
      </select>
    </div>
  );
};
export default FilterDishes;
