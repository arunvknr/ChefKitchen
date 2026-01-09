import React from 'react'
import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
const Dishes = () => {
  const {
  filteredDishes,
  showOrders,
  selectedSizes,
  setSelectedSizes,
  addedItems,
  orders,
  getPriceBySize,
  handleSubmit, 


  } =useContext(OrderContext);
  return (
      <div
  className={`grid grid-cols-2 md:grid-cols-3 gap-4 gap-y-20 mt-20 w-full
    ${showOrders ? " lg:grid-cols-3" : "md:grid-cols-3 gap-4 lg:grid-cols-4 "} ${showOrders ? "grid gird-cols-1 sm:grid-cols-3" : "sm:grid-cols-4,"}
  `}
>
  {filteredDishes.length === 0 && (
    <p className="text-center text-gray-400 col-span-full">
      No dishes found
    </p>
  )}
            {filteredDishes.map((item, idx) => {
              const size = selectedSizes[item.name] || "M";
              const addedKey = `${item.name}-${size}`;
              const isAdded = addedItems[addedKey];
             
              

              const cartCount = orders.reduce(
                (total, item) => total + item.qty,
                0
              );

              return (
                <div
                  key={idx}
                  className=" relative bg-[#1F1D2B] rounded-3xl  sm:w-[230px] md:w-[230px] lg:w-[280px] p-3 text-center pb-8 " >
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className=" w-24 h-24 sm:w-26 sm:h-26 rounded-full absolute -top-12 left-1/2 -translate-x-1/2 object-cover"/>
                  {/* Name */}
                  <p className="font-semibold text-sm mt-12 pt-4">
                    {item.name}
                  </p>
                  {/* Price */}
                  <p className="text-green-400 font-semibold text-sm mt-2">
                    {getPriceBySize(item.basePrice, size)} AED
                  </p>
                  {/* Bowls */}
                  <p className="text-xs text-gray-400 mt-1">{item.bowls}</p>
                  {/* Size buttons */}
                  <div className="flex flex-wrap gap-2 justify-center mt-3">
                    {item.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() =>
                          setSelectedSizes((prev) => ({
                            ...prev,
                            [item.name]: s,
                          }))
                        }
                        className={` px-3 py-2 rounded-lg text-sm transition  ${size === s ? "bg-orange-500" : "bg-[#2d303e] hover:bg-gray-700"} `} >
                        {s} </button>  ))}
                  </div>
                  {/* Add button */}
                  <button
                    onClick={() => handleSubmit(item)}
                    className={` mt-4   px-11 py-2 rounded-lg text-sm font-semibold transition
      ${isAdded ? "bg-green-600" : "bg-orange-500 hover:bg-orange-600"} `} >
                    {isAdded ? "Added" : "Add"}
                  </button>
                </div>
              );
            })}
          </div>
  )
}

export default Dishes
