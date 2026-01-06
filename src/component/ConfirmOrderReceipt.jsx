import React, { useState } from "react";
import { CircleCheckBig } from "lucide-react";

function ConfirmOrderReceipt({ orders = [], category, onConfirm }) {
  const now = new Date();

  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  const subtotal = orders.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  return (
    <div className="bg-[#1f1d2b] text-white p-6 rounded-2xl w-full max-w-md mx-auto">
      {orderConfirmed ? (
        /* ✅ ORDER COMPLETED PART */
        <div className="flex flex-col items-center justify-center text-center p-6">
          <CircleCheckBig className="w-20 h-20 text-green-500 mb-4" />

          <h2 className="text-2xl font-bold mb-2">
            Order Completed
          </h2>

          <p className="text-white mb-6">
            Your order has been placed successfully
          </p>

          <button
            onClick={onConfirm}
            className="bg-button text-white px-6 py-3 rounded-xl font-semibold"
          >
            Close
          </button>
        </div>
      ) : (
        /* 🧾 RECEIPT PART */
        <>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Order Receipt
          </h2>

          <div className="text-sm text-gray-400 flex justify-between mb-4">
            <span>Date: {date}</span>
            <span>Time: {time}</span>
          </div>

          <div className="mb-4">
            <span className="text-gray-400 text-sm">Order Type</span>
            <p className="font-semibold capitalize">{category}</p>
          </div>

          <div className="border-t border-gray-700 pt-4 space-y-3">
            {orders.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-400">
                    {item.qty} × AED {item.price}
                  </p>
                </div>
                <p className="font-semibold">
                  AED {(item.qty * item.price).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 mt-4 pt-4 flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>AED {subtotal.toFixed(2)}</span>
          </div>

          <button
            onClick={() => setOrderConfirmed(true)}
            className="w-full mt-6 bg-button py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            Confirm Order
          </button>

          <span className="flex justify-center pt-3 text-gray-400 text-sm">
            Thank You For Ordering
          </span>
        </>
      )}
    </div>
  );
}

export default ConfirmOrderReceipt;
