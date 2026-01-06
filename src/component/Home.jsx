import React, { useState, useEffect } from "react";
import { Search, ShoppingCart } from "lucide-react";
import Orders from "./Orders";
import Sidebar from "./Sidebar";
import ConfirmOrderReceipt from "./ConfirmOrderReceipt";


import { div } from "framer-motion/client";
import { tabs, dishes } from "../icons/index";
import Header from "./Header";
import FilterDishes from "./FilterDishes";

function Home() {
  const [active, setActive] = useState("today");
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [addedItems, setAddedItems] = useState({});
  const [today, setToday] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");
  const [orderType, setOrderType] = useState("dine-in");
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => setToday(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const getPriceBySize = (price, size) => {
    if (size === "S") return price - 2;
    if (size === "M") return price;
    return price + 2;
  };

  const handleSubmit = (item) => {
    const size = selectedSizes[item.name] || "M";
    const price = getPriceBySize(item.basePrice, size);

    setOrders((prev) => {
      const exists = prev.find(
        (o) => o.name === item.name && o.size === size && o.type === orderType
      );

      if (exists) {
        return prev.map((o) =>
          o.name === item.name && o.size === size ? { ...o, qty: o.qty + 1 } : o
        );
      }
      return [
        ...prev,
        {
          ...item,
          size,
          price,
          qty: 1,
          type: orderType,
        },
      ];
    });

    setAddedItems((prev) => ({ ...prev, [`${item.name}-${size}`]: true }));
    setShowOrders(true);
  };
  const increaseQty = (name, size) => {
    setOrders((prev) =>
      prev.map((item) =>
        item.name === name && item.size === size
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };
  const decreaseQty = (name, size) => {
    setOrders((prev) =>
      prev
        .map((item) =>
          item.name === name && item.size === size
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (name, size) => {
    setOrders((prev) =>
      prev.filter((item) => !(item.name === name && item.size === size))
    );

    setAddedItems((prev) => {
      const copy = { ...prev };
      delete copy[`${name}-${size}`];
      return copy;
    });
  };

  const filteredDishes = dishes.filter(
    (item) =>
      item.type.includes(orderType) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cartCount = orders.reduce((total, item) => total + item.qty, 0);
  return (
    <div className="flex h-screen bg-gray-800 text-white overflow-hidden w-full p">
      {receipt && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <ConfirmOrderReceipt
            orders={receipt.orders}
            category={receipt.category}
            onConfirm={() => {
              setReceipt(null); // close receipt
              setOrders([]); // optional: clear cart
            }}/>
        </div>
      )}
      <div className="hidden lg:block w-[85px] shrink-0 z-50">
        <Sidebar />
      </div>

      <div className={`flex-1 flex flex-col ${showOrders ? "lg:mr-[460px]" : ""}`}>
        <Header
  today={today}
  cartCount={cartCount}
  setShowOrders={setShowOrders}
  setSearchTerm={setSearchTerm}
  active={active}
  setActive={setActive}
  tabs={tabs}
/>
        <div className="flex-1 overflow-y-auto px-6 pl-10  no-scrollbar ">
          {/* FilterDishes */}
          <FilterDishes
  orderType={orderType}
  setOrderType={setOrderType}
/>
          <div
            className={`grid grid-cols-2   grid-910-3 lg:grid-cols-4  gap-3  ${
              showOrders ? "lg:grid-cols-2" : "lg:grid-cols-4"}  mt-21 gap-y-20`}>
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
                  className=" relative bg-[#1F1D2B] rounded-3xl w-full sm:w-[260px] md:w-[260px] min-h-8 p-3 text-center mx-auto pb-8 " >
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
        </div>
      </div>
      <Orders
        orders={orders}
        showOrders={showOrders}
        onClose={() => setShowOrders(false)}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeItem={removeItem}
        onConfirmOrder={(data) => {
          setReceipt(data);
          setShowOrders(false);
        }}
      />
    </div>
  );
}

export default Home;
