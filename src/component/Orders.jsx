import React, { useContext, useState } from "react";
import { Plus, Minus, Trash2, X } from "lucide-react";
import { OrderContext } from "../context/OrderContext";

function Orders() {

  const {   orders = [],
  increaseQty,
  decreaseQty,
  removeItem,
  onClose,
  showOrders,
  onConfirmOrder,} = useContext (OrderContext)



  const cartsection = [
    { id: 1, title: "dine-in" },
    { id: 2, title: "take-away" },
    { id: 3, title: "delivery" },
  ];

  const [category, setCategory] = useState("dine-in");
  // Filter orders by category
  const filteredOrders = orders.filter((item) => item.type === category);
  // Subtotal only for filtered orders
  const subtotal = filteredOrders.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div
      className={`bg-[#1f1d2b] text-white h-screen flex flex-col
      transition-transform duration-300 z-50
      ${
        showOrders
          ? "translate-x-0 fixed right-0 w-[96%] lg:w-[30%]"
          : "translate-x-full fixed right-0 w-[30%]"
      }`}
    >
      {/* HEADER */}
      <div className="p-4 flex items-center">
        <h2 className="text-2xl font-semibold">Orders</h2>
        <button onClick={onClose} className="ml-auto p-2 hover:text-red-500">
          <X size={26} />
        </button>
      </div>
      {/* CATEGORY FILTER */}
      <div className="p-5 border-b border-gray-700">
        <div className="flex gap-3 mb-4">
          {cartsection.map((item) => (
            <button
              key={item.id}
              onClick={() => setCategory(item.title)}
              className={`px-4 py-2 rounded-lg border font-semibold capitalize transition 
                ${
                  category === item.title
                    ? "bg-button text-white border-button"
                    : "text-button border-button"
                }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-[1fr_80px_80px] font-bold text-sm text-gray-300">
          <p>Item</p>
          <p className="text-center ">Qty</p>
          <p className="text-right ">Price</p>
        </div>
      </div>
      {/* ORDERS LIST */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
        {filteredOrders.length === 0 ? (
          <p className="text-gray-400 text-center">No items in this category</p>
        ) : (
          filteredOrders.map((item, index) => (
            <div key={index} className="bg-[#262837] p-4 rounded-xl">
              {/* TOP ROW */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium truncate max-w-[140px]">
                      {item.name}
                    </p>
                    <div className="flex flex-row gap-4 text-xs ">
                      <p className="text-xs text-gray-400 ">AED {item.price}</p>
                      <p className="font-bold">{item.size}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#2d303e] rounded-lg">
                    <span className="font-semibold">{item.qty}</span>
                  </div>
                  <p className="text-sm font-semibold">
                    {(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex  gap-3 mt-3 ">
                <input
  type="text"
  placeholder="Order Note"
  className="w-full md:flex-1 bg-[#2d303e] rounded-lg px-4 py-3 text-sm"
/>

                <div className="flex gap-2">
                  <button
                    onClick={() => decreaseQty(item.name, item.size)}
                    className="p-2 bg-gray-700 rounded hover:bg-gray-600"
                  >
                    <Minus size={14} />
                  </button>
                  <button
                    onClick={() => increaseQty(item.name, item.size)}
                    className="p-2 bg-gray-700 rounded hover:bg-gray-600"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.name, item.size)}
                  className="border border-pink-500 text-pink-500 p-2 rounded-lg
                  hover:bg-pink-500 hover:text-white transition"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* FOOTER */}
      <div className="border-t border-gray-700 p-6">
        <div className="flex justify-between font-semibold">
          <span>Subtotal</span>
          <span>AED {subtotal.toFixed(2)}</span>
        </div>
        <button
          disabled={orders.length === 0}
          onClick={() => {
            onConfirmOrder({
              orders: filteredOrders,
              category,
            });
          }}
          className={`w-full mt-4 py-3 rounded-xl font-semibold 
    ${
      orders.length === 0 ? "bg-gray-600 cursor-not-allowed" : "bg-orange-500"
    }`}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Orders;
