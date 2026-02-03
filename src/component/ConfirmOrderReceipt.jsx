// import React, { useContext, useState } from "react";
// import { CircleCheckBig } from "lucide-react";
// import { OrderContext } from "../context/OrderContext";

// function ConfirmOrderReceipt() {
//   const { confirmedOrder, onCloseReceipt } = useContext(OrderContext);

//   if (!confirmedOrder) return null;

//   const { orders, category } = confirmedOrder;

//   const now = new Date();
//   const date = now.toLocaleDateString();
//   const time = now.toLocaleTimeString();

//   const subtotal = orders.reduce(
//     (acc, item) => acc + item.price * item.qty,
//     0
//   );

//   const [showPayment, setShowPayment] = useState(false);
//   const [orderConfirmed, setOrderConfirmed] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("");

//   const handlePayment = (method) => {
//     setPaymentMethod(method);
//     setOrderConfirmed(true);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-[#1f1d2b] text-white p-6 rounded-2xl w-full max-w-md mx-auto">

//         {/* ✅ ORDER COMPLETED */}
//         {orderConfirmed ? (
//           <div className="flex flex-col items-center text-center p-6">
//             <CircleCheckBig className="w-20 h-20 text-green-500 mb-4" />
//             <h2 className="text-2xl font-bold mb-2">Order Completed</h2>
//             <p className="mb-2">Payment Method: {paymentMethod}</p>
//             <p className="mb-6">Your order has been placed successfully</p>

//             <button
//               onClick={onCloseReceipt}
//               className="bg-button px-6 py-3 rounded-xl font-semibold"
//             >
//               Close
//             </button>
//           </div>

//         ) : showPayment ? (
//           /* ✅ PAYMENT METHODS */
//           <>
//             <h2 className="text-xl font-semibold text-center mb-6">
//               Select Payment Method
//             </h2>

//             <div className="space-y-4">
//               <button
//                 onClick={() => handlePayment("Cash")}
//                 className="w-full bg-gray-700 py-3 rounded-xl"
//               >
//                 💵 Cash
//               </button>

//               <button
//                 onClick={() => handlePayment("Card")}
//                 className="w-full bg-gray-700 py-3 rounded-xl"
//               >
//                 💳 Card
//               </button>

//               <button
//                 onClick={() => handlePayment("UPI")}
//                 className="w-full bg-gray-700 py-3 rounded-xl"
//               >
//                 📱 UPI
//               </button>
//             </div>
//           </>

//         ) : (
//           /* ✅ RECEIPT */
//           <>
//             <h2 className="text-2xl font-semibold text-center mb-4">
//               Order Receipt
//             </h2>

//             <div className="text-sm text-gray-400 flex justify-between mb-4">
//               <span>Date: {date}</span>
//               <span>Time: {time}</span>
//             </div>

//             <p className="mb-4 capitalize">
//               <span className="text-gray-400">Order Type:</span> {category}
//             </p>

//             <div className="space-y-3 border-t border-gray-700 pt-4">
//               {orders.map((item, i) => (
//                 <div key={i} className="flex justify-between">
//                   <div>
//                     <p>{item.name}</p>
//                     <p className="text-gray-400 text-sm">
//                       {item.qty} × AED {item.price}
//                     </p>
//                   </div>
//                   <p>AED {(item.qty * item.price).toFixed(2)}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="flex justify-between mt-4 font-bold text-lg">
//               <span>Total</span>
//               <span>AED {subtotal.toFixed(2)}</span>
//             </div>

//             <button
//               onClick={() => setShowPayment(true)}
//               className="w-full mt-6 bg-button py-3 rounded-xl font-semibold"
//             >
//               Confirm Order
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ConfirmOrderReceipt;

import React, { useContext, useState } from "react";
import { CircleCheckBig } from "lucide-react";
import { OrderContext } from "../context/OrderContext";
import { DashboardContext } from "../context/dashbordContext";


function ConfirmOrderReceipt() {
  const { confirmedOrder, onCloseReceipt } = useContext(OrderContext);
  const { setConfirmedOrders } = useContext(DashboardContext);

  if (!confirmedOrder) return null;

  const { orders, category } = confirmedOrder;

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  const subtotal = orders.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const [showPayment, setShowPayment] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  /* ✅ SAVE ORDER TO ADMIN */
  const handlePayment = (method) => {
    setPaymentMethod(method);
    setOrderConfirmed(true);

    const orderForAdmin = {
      id: Date.now(),
      category,
      orders,
      paymentMethod: method,
      total: subtotal,
      status: "Pending", 
      date: new Date().toLocaleString(),
    };

    setConfirmedOrders((prev) => [...prev, orderForAdmin]);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#1f1d2b] text-white p-6 rounded-2xl w-full max-w-md mx-auto">

        {/* ✅ ORDER COMPLETED */}
        {orderConfirmed ? (
          <div className="flex flex-col items-center text-center p-6">
            <CircleCheckBig className="w-20 h-20 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Order Completed</h2>
            <p className="mb-2">Payment Method: {paymentMethod}</p>
            <p className="mb-6">Your order has been placed successfully</p>

            <button
              onClick={onCloseReceipt}
              className="bg-button px-6 py-3 rounded-xl font-semibold"
            >
              Close
            </button>
          </div>

        ) : showPayment ? (
          /* ✅ PAYMENT METHODS */
          <>
            <h2 className="text-xl font-semibold text-center mb-6">
              Select Payment Method
            </h2>

            <div className="space-y-4">
              <button
                onClick={() => handlePayment("Cash")}
                className="w-full bg-gray-700 py-3 rounded-xl"
              >
                💵 Cash
              </button>

              <button
                onClick={() => handlePayment("Card")}
                className="w-full bg-gray-700 py-3 rounded-xl"
              >
                💳 Card
              </button>

              <button
                onClick={() => handlePayment("UPI")}
                className="w-full bg-gray-700 py-3 rounded-xl"
              >
                📱 UPI
              </button>
            </div>
          </>

        ) : (
          /* ✅ RECEIPT */
          <>
            <h2 className="text-2xl font-semibold text-center mb-4">
              Order Receipt
            </h2>

            <div className="text-sm text-gray-400 flex justify-between mb-4">
              <span>Date: {date}</span>
              <span>Time: {time}</span>
            </div>

            <p className="mb-4 capitalize">
              <span className="text-gray-400">Order Type:</span> {category}
            </p>

            <div className="space-y-3 border-t border-gray-700 pt-4">
              {orders.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <div>
                    <p>{item.name}</p>
                    <p className="text-gray-400 text-sm">
                      {item.qty} × AED {item.price}
                    </p>
                  </div>
                  <p>AED {(item.qty * item.price).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-4 font-bold text-lg">
              <span>Total</span>
              <span>AED {subtotal.toFixed(2)}</span>
            </div>

            <button
              onClick={() => setShowPayment(true)}
              className="w-full mt-6 bg-button py-3 rounded-xl font-semibold"
            >
              Confirm Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ConfirmOrderReceipt;
