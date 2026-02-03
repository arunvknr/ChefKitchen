import React, { useContext, useState } from "react";
import { DashboardContext } from "../context/dashbordContext";

// localStorage.removeItem("confirmedOrders");


const AdminOrders = () => {
  const { confirmedOrders, updateOrderStatus, } =
    useContext(DashboardContext);
    

  const [search, setSearch] = useState("");

  /* 🔹 FLATTEN ORDERS */
  
 
  
  const orderItems = confirmedOrders.flatMap((order) =>
    order.orders.map((item) => ({
      ...item,
      orderType: order.category,
      orderId: order.id,
      status: order.status || "Pending",
    }))
  );

 

  /* 🔹 SEARCH */
  const filteredOrders = orderItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  
  );
  

  return (
    <div className="p-4 md:p-6 bg-[#2f3542] min-h-screen text-white">
      <h1 className="text-xl md:text-2xl font-bold mb-4">
        Orders List
      </h1>

      {/* 🔍 SEARCH */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 px-4 py-2 rounded-lg bg-gray-300 text-black outline-none"
        />
      </div>

      {/* 📦 TABLE */}
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full table-fixed border-collapse bg-[#3b4252] min-w-[900px]">
          {/* TABLE HEAD */}
          <thead className="bg-gray-200 text-black">
            <tr>
              <th className="p-3 w-[80px] text-center">Img</th>
              <th className="p-3 w-[180px] text-left">Name</th>
              <th className="p-3 w-[80px] text-center">Size</th>
              <th className="p-3 w-[70px] text-center">Qty</th>
              <th className="p-3 w-[120px] text-left">Price</th>
              <th className="p-3 w-[140px] text-left">Order Type</th>
              <th className="p-3 w-[140px] text-left">Status</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="p-6 text-center text-gray-400"
                >
                  No Orders Found
                </td>
              </tr>
            ) : (
              filteredOrders.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-600 hover:bg-[#434c5e]"
                >
                  <td className="p-3 text-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 mx-auto rounded-md object-cover"
                    />
                  </td>

                  <td className="p-3 capitalize truncate">
                    {item.name}
                  </td>

                  <td className="p-3 text-center">
                    {item.size}
                  </td>

                  <td className="p-3 text-center">
                    {item.qty}
                  </td>

                  <td className="p-3">
                    AED {(item.price * item.qty).toFixed(2)}
                  </td>

                  <td className="p-3 capitalize">
                    {item.orderType.replace("-", " ")}
                  </td>

                  <td className="p-3">
                    <select
                      value={item.status}
                      onChange={(e) =>
                        updateOrderStatus(
                          item.orderId,
                          e.target.value
                        )
                      }
                      className="w-full bg-gray-700 text-white px-2 py-1 rounded outline-none"
                    >
                      <option>Pending</option>
                      <option>Preparing</option>
                      <option>Ready</option>
                      <option>Completed</option>
                      <option disabled>Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 📱 MOBILE NOTE */}
      <p className="text-gray-400 text-sm mt-3 md:hidden">
        Swipe left/right to view full table →
      </p>
    </div>
  );
};

export default AdminOrders;
