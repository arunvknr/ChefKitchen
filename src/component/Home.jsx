import React, { useState, useEffect } from "react";
import { Search, ShoppingCart } from "lucide-react";
import Orders from "./Orders";
import Sidebar from "./Sidebar";
import ConfirmOrderReceipt from "./ConfirmOrderReceipt";



import i1 from "../assets/img2.svg";
import i2 from "../assets/img3.svg";
import i3 from "../assets/img4.svg";
import i4 from "../assets/img5.svg";
import i5 from "../assets/img6.svg";
import i6 from "../assets/img8.svg";
import i7 from "../assets/img9.svg";
import i8 from "../assets/img10.svg";
import i9 from "../assets/img11.svg";
import { div } from "framer-motion/client";

const tabs = [
  { id: "today", label: "Today Special" },
  { id: "our", label: "Our Special" },
  { id: "south", label: "South Indian Special" },
];

const dishes = [
  {
    img: i1,
    name: "Healthy noodle with spanish leaf",
    basePrice: 3.29,
    bowls: "22 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["dine-in"],
  },
  {
    img: i2,
    name: "Hot spicy fried rice with omelet",
    basePrice: 3.29,
    bowls: "13 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["delivery", "dine-in"],
  },
  {
    img: i3,
    name: "Spicy noodle with special omelete",
    basePrice: 3.29,
    bowls: "17 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["dine-in"],
  },
  {
    img: i4,
    name: "Healthy noodle with spinach leaf",
    basePrice: 25,
    bowls: "22 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["take-away", "dine-in"],
  },
  {
    img: i5,
    name: "Hot spicy fried rice with omelett",
    basePrice: 25,
    bowls: "13 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["dine-in"],
  },
  {
    img: i6,
    name: "Spicy noodle with special omelette",
    basePrice: 25,
    bowls: "17 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["delivery", "dine-in"],
  },
  {
    img: i7,
    name: "Spicy seasoned seafood noodles",
    basePrice: 25,
    bowls: "16 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["delivery", "dine-in"],
  },
  {
    img: i8,
    name: "Salted Pasta with mushroom sauce",
    basePrice: 25,
    bowls: "13 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["take-away", "dine-in"],
  },
  {
    img: i9,
    name: "Beef dumplinggit hot and sour soup",
    basePrice: 25,
    bowls: "20 Bowls available",
    sizes: ["S", "M", "L"],
    type: ["dine-in", "take-away"],
  },
];

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
        setOrders([]);    // optional: clear cart
      }}
    />
  </div>
)}

      <div className="hidden lg:block w-[85px] shrink-0 z-50">
        <Sidebar />
      </div>

      <div
        className={`flex-1 flex flex-col ${showOrders ? "lg:mr-[460px]" : ""}`}
      >
        <div className="sticky top-0 z-30 bg-gray-800 px-6 pl-10 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl h ">Chef Kitchen</h1>
              <p className="text-sm text-gray-300">
                {today.toLocaleDateString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="flex gap-5">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
                <input
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-14 pl-10 pr-4 w-60 rounded-xl bg-gray-800 border border-gray-600 outline-none p"
                  placeholder="Search food..."
                />
              </div>

              <button
                onClick={() => setShowOrders(true)}
                className="relative bg-orange-500 rounded-xl px-4 py-2 flex items-center"
              >
                <div className="relative flex items-center justify-center">
                  <ShoppingCart size={38} />

                  {cartCount > 0 && (
                    <span
                      className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1
        bg-red-600 text-white text-xs font-bold
        flex items-center justify-center rounded-full"
                    >
                      {cartCount}
                    </span>
                  )}
                </div>
              </button>
            </div>
          </div>
          <div className="flex mt-6 space-x-10 border-b border-gray-600">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`pb-3 relative ${
                  active === tab.id ? "text-orange-400" : "text-white"
                }`}
              >
                {tab.label}
                {active === tab.id && (
                  <span className="absolute left-0 -bottom-px h-[3px] w-full bg-orange-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-6 pl-10  no-scrollbar">
          <div className=" flex justify-between sticky top-0 z-30 py-4  bg-gray-800 ">
            <span className="text-2xl">Choose Dishes</span>
            <select
              value={orderType}
              onChange={(e) => setOrderType(e.target.value)}
              className="bg-[#1F1D2B] border border-gray-600 text-white
             px-6 py-2 rounded-xl outline-none cursor-pointer"
            >
              <option value="dine-in">Dine In</option>
              <option value="take-away">Take Away</option>
              <option value="delivery">Delivery</option>
            </select>
          </div>
          <div
            className={`grid grid-cols-2 grid-910-3 gap-6 mt-14 ${
              showOrders ? " lg:grid-cols-2 " : "lg:grid-cols-4"
            } gap-6 mt-14 gap-y-20`}
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
  className="
    relative
    bg-[#1F1D2B]
    rounded-3xl
    w-full sm:w-[260px] md:w-[280px]
    min-h-[280px]
    p-4
    text-center
    mx-auto
  "
>
  {/* Image */}
  <img
    src={item.img}
    alt={item.name}
    className="
      w-24 h-24 sm:w-26 sm:h-26
      rounded-full
      absolute
      -top-12
      left-1/2
      -translate-x-1/2
      object-cover
    "
  />

  {/* Name */}
  <p className="font-semibold text-sm mt-12 pt-4">
    {item.name}
  </p>

  {/* Price */}
  <p className="text-green-400 font-semibold text-sm mt-2">
    {getPriceBySize(item.basePrice, size)} AED
  </p>

  {/* Bowls */}
  <p className="text-xs text-gray-400 mt-1">
    {item.bowls}
  </p>

  {/* Size buttons */}
  <div className="flex flex-wrap gap-3 justify-center mt-3">
    {item.sizes.map((s) => (
      <button
        key={s}
        onClick={() =>
          setSelectedSizes((prev) => ({
            ...prev,
            [item.name]: s,
          }))
        }
        className={`
          px-3 py-2
          rounded-lg
          text-sm
          transition
          ${
            size === s
              ? "bg-orange-500"
              : "bg-[#2d303e] hover:bg-gray-700"
          }
        `}
      >
        {s}
      </button>
    ))}
  </div>

  {/* Add button */}
  <button
    onClick={() => handleSubmit(item)}
    className={`
      mt-4
      w-full sm:w-auto
      px-11 py-2
      rounded-lg
      text-sm
      font-semibold
      transition
      ${
        isAdded
          ? "bg-green-600"
          : "bg-orange-500 hover:bg-orange-600"
      }
    `}
  >
    {isAdded ? "Added" : "Add"}
  </button>
</div>

              );
            })}
          </div>
        </div>
        a
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
